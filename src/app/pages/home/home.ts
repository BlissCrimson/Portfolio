import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { TechStack } from './tech-stack/tech-stack';
import { Reviews } from './reviews/reviews';
import { Contact } from './contact/contact';

type AboutCard = { label: string; desc: string };

@Component({
  imports: [Hero, Projects, TechStack, Reviews, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly tags: readonly string[] = ['Husum', 'Frontend Developer', 'UTC+1'];

  protected readonly cards: readonly AboutCard[] = [
    {
      label: 'UI_DEVELOPMENT',
      desc: 'Saubere, responsive Interfaces – HTML, CSS, SCSS und durchdachte UI-Konzepte',
    },
    {
      label: 'TYPESCRIPT',
      desc: 'Typsicherer, wartbarer Code mit TypeScript, JavaScript und Angular',
    },
    {
      label: 'BACKEND_TOOLS',
      desc: 'Firebase, Supabase, REST APIs – Datenhaltung und Authentifizierung',
    },
    {
      label: 'WORKFLOW',
      desc: 'Git, GitHub, npm/pnpm, SCRUM – strukturierte Entwicklung im Team',
    },
  ];
}
