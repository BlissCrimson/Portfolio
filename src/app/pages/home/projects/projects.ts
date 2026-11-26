import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Arrow, scrollToSection } from '../../../shared/components/arrow/arrow';
import { Dictionary } from '../../../shared/services/dictionaries';
import { Translation } from '../../../shared/services/translation';

type Project = {
  id: number;
  title: string;
  description: keyof Dictionary['work']['descriptions'];
  tech: string;
  // One landscape image or several portrait screens
  images: readonly string[];
  repoUrl: string;
  storeUrl?: string;
  demoUrl: string;
};

const projects: readonly Project[] = [
  {
    id: 1,
    title: 'Join',
    description: 'join',
    tech: 'HTML, CSS, JavaScript, Firebase',
    images: ['assets/img/projects/join.png'],
    repoUrl: 'https://github.com/BlissCrimson/join',
    demoUrl: 'https://join.matthias-tausch.com',
  },
  {
    id: 2,
    title: 'El Pollo Loco',
    description: 'pollo',
    tech: 'HTML, CSS, JavaScript, Canvas',
    images: ['assets/img/projects/el_pollo_loco.png'],
    repoUrl: 'https://github.com/BlissCrimson/EL_POLLO_LOCO',
    demoUrl: 'https://elpolloloco.matthias-tausch.com',
  },
  {
    id: 3,
    title: 'Pokedex',
    description: 'pokedex',
    tech: 'HTML, CSS, JavaScript, REST API',
    images: ['assets/img/projects/pokedex.png'],
    repoUrl: 'https://github.com/BlissCrimson/Pokedex',
    demoUrl: 'https://pokedex.matthias-tausch.com',
  },
  {
    id: 4,
    title: 'What Eat?',
    description: 'whatEat',
    tech: 'Angular, TypeScript, Capacitor, Android',
    images: [
      'assets/img/projects/what_eat_home.png',
      'assets/img/projects/what_eat_dish_list.png',
      'assets/img/projects/what_eat_add_dish.png',
    ],
    repoUrl: 'https://github.com/BlissCrimson/what-eat',
    storeUrl: 'https://play.google.com/store/apps/details?id=de.janusnova.whateat',
    // Subdomain still has to be set up
    demoUrl: 'https://whateat.matthias-tausch.com',
  },
];

@Component({
  imports: [Arrow, RouterLink],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly translation = inject(Translation);
  protected readonly scrollToSection = scrollToSection;
  protected readonly ongoingTech = 'Angular, TypeScript, SCSS, Playwright, Vitest, Supabase';

  // Two screens: three cards, then the fourth card next to the ongoing project
  protected readonly panels = [
    { id: 'projects', projects: projects.slice(0, 3), ongoing: false, next: 'projects-more' },
    { id: 'projects-more', projects: projects.slice(3), ongoing: true, next: 'references' },
  ];

  // Cards that are expanded on mobile; the first one starts open
  protected readonly expanded = signal<ReadonlySet<number>>(new Set([1]));

  protected toggle(id: number): void {
    this.expanded.update((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  }
}
