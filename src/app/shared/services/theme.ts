import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export const themes = ['green', 'turquoise', 'yellow'] as const;
export type ThemeName = (typeof themes)[number];

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);

  readonly current = signal<ThemeName>(this.readStoredTheme());

  constructor() {
    // The palettes in _colors.scss react to this attribute
    effect(() => this.document.documentElement.setAttribute('data-theme', this.current()));
  }

  use(theme: ThemeName): void {
    this.current.set(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be blocked; the choice then only lasts for this visit
    }
  }

  private readStoredTheme(): ThemeName {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return themes.find((theme) => theme === stored) ?? 'green';
    } catch {
      return 'green';
    }
  }
}
