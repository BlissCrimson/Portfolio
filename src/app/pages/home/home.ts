import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { scrollToSection } from '../../shared/components/arrow/arrow';
import { Contact } from './contact/contact';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Reviews } from './reviews/reviews';
import { TechStack } from './tech-stack/tech-stack';
import { WhyMe } from './why-me/why-me';

// Pause without wheel events that ends one gesture, and the minimum time between two steps
const GESTURE_PAUSE_MS = 180;
const MIN_STEP_MS = 650;

@Component({
  imports: [Hero, WhyMe, TechStack, Projects, Reviews, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  private lastWheel = 0;
  private lastStep = 0;
  private locked = false;

  constructor() {
    const route = inject(ActivatedRoute);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      let initial = true;
      route.fragment.pipe(takeUntilDestroyed(destroyRef)).subscribe((fragment) => {
        if (fragment) scrollToSection(fragment, initial ? 'instant' : undefined);
        initial = false;
      });

      const element = this.track().nativeElement;
      const onWheel = (event: WheelEvent) => this.onWheel(event);
      // Not passive: the default vertical scroll has to be cancelled
      window.addEventListener('wheel', onWheel, { passive: false });

      // Keep the current panel aligned when the window size changes
      let current = 0;
      const onScroll = () => (current = element.scrollLeft / element.clientWidth || 0);
      const onResize = () => (element.scrollLeft = Math.round(current) * element.clientWidth);
      element.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize);

      destroyRef.onDestroy(() => {
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('resize', onResize);
      });
    });
  }

  // Arrow keys move one panel, unless the user is typing in a form field
  protected onKey(event: Event, direction: number): void {
    if ((event.target as HTMLElement).closest('input, textarea') || !this.isHorizontal()) return;
    event.preventDefault();
    this.step(direction);
  }

  // One wheel gesture moves exactly one panel, so that no section is cut off
  private onWheel(event: WheelEvent): void {
    if (!this.isHorizontal() || event.ctrlKey) return;
    const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    if (!delta || this.canScrollInside(event.target as Element, delta)) return;
    event.preventDefault();

    const now = Date.now();
    if (now - this.lastWheel > GESTURE_PAUSE_MS && now - this.lastStep > MIN_STEP_MS) {
      this.locked = false;
    }
    this.lastWheel = now;
    if (this.locked) return;

    this.locked = true;
    this.lastStep = now;
    this.step(Math.sign(delta));
  }

  // Panels and text areas that are too tall keep their own vertical scrolling
  private canScrollInside(target: Element, delta: number): boolean {
    for (const selector of ['textarea', '.panel']) {
      const box = target.closest(selector);
      if (!box || box.scrollHeight <= box.clientHeight + 1) continue;
      const canScroll =
        delta > 0 ? box.scrollTop + box.clientHeight < box.scrollHeight - 1 : box.scrollTop > 0;
      if (canScroll) return true;
    }
    return false;
  }

  // Moves to the next snap position in the given direction
  private step(direction: number): void {
    const element = this.track().nativeElement;
    const origin = element.getBoundingClientRect().left;
    const positions = Array.from(element.querySelectorAll<HTMLElement>('.panel'))
      .filter((panel) => getComputedStyle(panel).scrollSnapAlign !== 'none')
      .map((panel) => Math.round(panel.getBoundingClientRect().left - origin + element.scrollLeft));
    const next =
      direction > 0
        ? positions.find((position) => position > element.scrollLeft + 2)
        : positions.reverse().find((position) => position < element.scrollLeft - 2);
    if (next === undefined) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollTo({ left: next, behavior: reducedMotion ? 'auto' : 'smooth' });
  }

  private isHorizontal(): boolean {
    return window.matchMedia('(min-width: 801px)').matches;
  }
}
