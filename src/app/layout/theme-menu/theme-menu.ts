import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Theme, ThemeName, themes } from '../../shared/services/theme';
import { Translation } from '../../shared/services/translation';

@Component({
  selector: 'app-theme-menu',
  styleUrl: './theme-menu.scss',
  templateUrl: './theme-menu.html',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(keydown.escape)': 'closeAndFocus($event)',
    '(document:keydown.escape)': 'open.set(false)',
  },
})
export class ThemeMenu {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly toggle = viewChild.required<ElementRef<HTMLButtonElement>>('toggle');

  protected readonly translation = inject(Translation);
  protected readonly theme = inject(Theme);
  protected readonly themes = themes;
  protected readonly open = signal(false);

  protected select(name: ThemeName): void {
    this.theme.use(name);
    this.open.set(false);
    this.toggle().nativeElement.focus();
  }

  protected onDocumentClick(event: Event): void {
    if (!this.element.nativeElement.contains(event.target as Node)) this.open.set(false);
  }

  // Escape inside the open list only closes this menu, not the mobile main menu
  protected closeAndFocus(event: Event): void {
    if (!this.open()) return;
    event.stopPropagation();
    this.open.set(false);
    this.toggle().nativeElement.focus();
  }
}
