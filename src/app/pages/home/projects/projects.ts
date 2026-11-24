import { Component } from '@angular/core';

type ProjectColor = 'cyan' | 'blue' | 'pink';

type Project = {
  id: string;
  title: string;
  tag: string;
  year: string;
  status: string;
  description: string;
  tech: readonly string[];
  color: ProjectColor;
  image: string;
  imageAlt: string;
  repoUrl: string;
  demoUrl: string;
};

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects: readonly Project[] = [
    {
      id: '01',
      title: 'JOIN',
      tag: 'Web App',
      year: '2024',
      status: 'LIVE',
      description:
        'Kanban-Board zur Aufgabenverwaltung mit Drag & Drop, Kontaktverwaltung und Login/Gastzugang, Daten werden über Firebase gespeichert.',
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'FIREBASE'],
      color: 'cyan',
      image: 'assets/img/projects/join.png',
      imageAlt: 'Screenshot des JOIN Kanban-Boards',
      repoUrl: 'https://github.com/BlissCrimson/join',
      demoUrl: 'https://join.matthias-tausch.com',
    },
    {
      id: '02',
      title: 'EL_POLLO_LOCO',
      tag: '2D Game',
      year: '2024',
      status: 'PLAYABLE',
      description:
        "2D-Jump-'n'-Run-Browsergame in Vanilla JavaScript mit Canvas-Rendering, Gegner-KI, Endgegner-Kampf und objektorientierter Spiellogik.",
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'CANVAS'],
      color: 'pink',
      image: 'assets/img/projects/el_pollo_loco.png',
      imageAlt: 'Screenshot des Spiels El Pollo Loco',
      repoUrl: 'https://github.com/BlissCrimson/EL_POLLO_LOCO',
      demoUrl: 'https://elpolloloco.matthias-tausch.com',
    },
    {
      // Placeholder values for year/status/tag until confirmed
      id: '03',
      title: 'POKEDEX',
      tag: 'Web App',
      year: '2025',
      status: 'LIVE',
      description:
        'Web-App zum Durchsuchen und Filtern von Pokémon, lädt Daten live über die PokéAPI und stellt Details in einer Kartenansicht dar.',
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'REST API'],
      color: 'blue',
      image: 'assets/img/projects/pokedex.png',
      imageAlt: 'Screenshot der Pokedex Web-App',
      repoUrl: 'https://github.com/BlissCrimson/Pokedex',
      demoUrl: 'https://pokedex.matthias-tausch.com',
    },
  ];

  protected get entryCount(): string {
    return this.projects.length.toString().padStart(2, '0');
  }
}
