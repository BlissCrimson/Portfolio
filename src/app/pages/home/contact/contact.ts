import { Component, signal } from '@angular/core';

type FieldName = 'name' | 'email' | 'message' | 'privacy';
type SendState = 'idle' | 'sending' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  // Relative to the site root; the PHP script must be deployed there
  private readonly endpoint = 'contact_form_mail.php';

  protected readonly errors = signal<Partial<Record<FieldName, string>>>({});
  protected readonly state = signal<SendState>('idle');

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.state() === 'sending') return;

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const privacyAccepted = data.get('privacy') !== null;

    if (!this.validate(name, email, message, privacyAccepted)) return;

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
    } catch {
      this.state.set('error');
    }
  }

  private validate(name: string, email: string, message: string, privacy: boolean): boolean {
    const errors: Partial<Record<FieldName, string>> = {};
    if (!name) errors.name = 'Bitte gib deinen Namen an.';
    if (!emailPattern.test(email)) errors.email = 'Bitte gib eine gültige E-Mail-Adresse an.';
    if (!message) errors.message = 'Bitte gib eine Nachricht ein.';
    if (!privacy) errors.privacy = 'Bitte stimme der Datenverarbeitung zu.';
    this.errors.set(errors);
    return Object.keys(errors).length === 0;
  }
}
