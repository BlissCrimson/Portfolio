import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type HeroStat = { label: string; value: string };

@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly fullRole = 'Frontend Developer';
  protected readonly typedRole = signal('');

  protected readonly stats: readonly HeroStat[] = [
    { label: 'PROJECTS_SHIPPED', value: '03' },
    { label: 'STANDORT', value: 'Husum' },
    { label: 'TECH_STACK', value: '12+' },
    { label: 'STATUS', value: 'OPEN' },
  ];

  constructor() {
    this.startTyping();
  }

  // Types the role character by character; shows the full text right away if reduced motion is preferred
  private startTyping(): void {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      this.typedRole.set(this.fullRole);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      index++;
      this.typedRole.set(this.fullRole.slice(0, index));
      if (index >= this.fullRole.length) {
        clearInterval(interval);
      }
    }, 55);

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }
}
