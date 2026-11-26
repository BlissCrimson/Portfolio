import { Component, DestroyRef, inject, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { scrollToSection } from '../../shared/components/arrow/arrow';
import { Translation } from '../../shared/services/translation';

type NavKey = 'why' | 'skills' | 'skillSet' | 'work' | 'contact' | 'contactMe';
type NavLink = { id: string; label: NavKey; mobileLabel: NavKey };

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly navigated = output<void>();

  protected readonly translation = inject(Translation);
  protected readonly active = signal('');
  protected readonly links: readonly NavLink[] = [
    { id: 'about', label: 'why', mobileLabel: 'why' },
    { id: 'techstack', label: 'skills', mobileLabel: 'skillSet' },
    { id: 'projects', label: 'work', mobileLabel: 'work' },
    { id: 'contact', label: 'contact', mobileLabel: 'contactMe' },
  ];
  // Sections in page order; references have no menu entry and clear the highlight
  private readonly sectionIds = ['top', 'about', 'techstack', 'projects', 'references', 'contact'];

  constructor() {
    // Capture phase: the horizontal scroll container does not bubble its scroll events
    const listener = () => this.updateActive();
    document.addEventListener('scroll', listener, { capture: true, passive: true });
    inject(DestroyRef).onDestroy(() =>
      document.removeEventListener('scroll', listener, { capture: true }),
    );
  }

  protected select(id: string): void {
    this.navigated.emit();
    scrollToSection(id);
  }

  // The last section that has passed the reading line is the active one
  private updateActive(): void {
    let current = '';
    for (const id of this.sectionIds) {
      const rect = document.getElementById(id)?.getBoundingClientRect();
      if (rect && rect.left <= window.innerWidth * 0.5 && rect.top <= window.innerHeight * 0.4) {
        current = id;
      }
    }
    this.active.set(current);
  }
}
