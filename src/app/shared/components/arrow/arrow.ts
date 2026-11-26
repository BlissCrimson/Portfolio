import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Translation } from '../../services/translation';

// Scrolls a section into view, horizontally on desktop and vertically on mobile
export function scrollToSection(id: string, behavior?: ScrollBehavior): void {
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView?.({
    behavior: behavior ?? (reducedMotion ? 'auto' : 'smooth'),
    block: 'start',
    inline: 'start',
  });
}

@Component({
  imports: [RouterLink],
  selector: 'app-arrow',
  styleUrl: './arrow.scss',
  templateUrl: './arrow.html',
})
export class Arrow {
  readonly target = input.required<string>();
  readonly direction = input<'right' | 'left' | 'up'>('right');
  readonly label = input<string>();

  protected readonly translation = inject(Translation);
  protected readonly scrollToSection = scrollToSection;
}
