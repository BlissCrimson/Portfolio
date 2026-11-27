import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../../layout/footer/footer';
import { Arrow } from '../../../shared/components/arrow/arrow';
import { Translation } from '../../../shared/services/translation';

type FieldName = 'name' | 'email' | 'message' | 'privacy';
type SendState = 'idle' | 'sending' | 'success' | 'error';
type FormValues = { name: string; email: string; message: string; privacy: boolean };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emptyValues: FormValues = { name: '', email: '', message: '', privacy: false };

@Component({
  imports: [Arrow, Footer, RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  // Relative to the site root; the PHP script must be deployed there
  private readonly endpoint = 'contact_form_mail.php';

  protected readonly translation = inject(Translation);
  protected readonly state = signal<SendState>('idle');

  private readonly values = signal<FormValues>(emptyValues);
  // Errors only show up for fields the user has already left
  private readonly touched = signal<ReadonlySet<string>>(new Set());

  protected readonly invalid = computed<Record<FieldName, boolean>>(() => {
    const { name, email, message, privacy } = this.values();
    return { name: !name, email: !emailPattern.test(email), message: !message, privacy: !privacy };
  });
  protected readonly valid = computed(() => !Object.values(this.invalid()).includes(true));

  protected showError(field: FieldName): boolean {
    return this.touched().has(field) && this.invalid()[field];
  }

  protected showValid(field: FieldName): boolean {
    return this.touched().has(field) && !this.invalid()[field];
  }

  protected onInput(event: Event): void {
    this.values.set(this.readValues(event.currentTarget as HTMLFormElement));
  }

  protected onBlur(event: Event): void {
    const field = (event.target as HTMLInputElement).name;
    if (field) this.touched.update((current) => new Set(current).add(field));
  }

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.state() === 'sending') return;

    const form = event.target as HTMLFormElement;
    this.values.set(this.readValues(form));
    if (!this.valid()) {
      this.touched.set(new Set(['name', 'email', 'message', 'privacy']));
      return;
    }

    const { name, email, message } = this.values();
    this.state.set('sending');
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error('Mail delivery failed');
      this.state.set('success');
      form.reset();
      this.values.set(emptyValues);
      this.touched.set(new Set());
    } catch {
      this.state.set('error');
    }
  }

  private readValues(form: HTMLFormElement): FormValues {
    const data = new FormData(form);
    return {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      privacy: data.get('privacy') !== null,
    };
  }
}
