import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { dictionaries } from './dictionaries';

export type Language = keyof typeof dictionaries;

const STORAGE_KEY = 'language';

@Injectable({ providedIn: 'root' })
export class Translation {
  private readonly document = inject(DOCUMENT);

  readonly language = signal<Language>(this.readStoredLanguage());
  readonly texts = computed(() => dictionaries[this.language()]);

  constructor() {
    effect(() => (this.document.documentElement.lang = this.language()));
  }

  use(language: Language): void {
    this.language.set(language);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage can be blocked; the choice then only lasts for this visit
    }
  }

  private readStoredLanguage(): Language {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'de';
    } catch {
      return 'de';
    }
  }
}
