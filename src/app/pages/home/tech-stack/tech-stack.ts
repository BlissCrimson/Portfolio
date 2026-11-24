import { Component } from '@angular/core';
import {
  type SimpleIcon,
  siAngular,
  siCodeforces,
  siCss,
  siFirebase,
  siGit,
  siGithub,
  siGooglechrome,
  siHtml5,
  siJavascript,
  siNpm,
  siOpenapiinitiative,
  siPnpm,
  siSass,
  siScrumalliance,
  siSupabase,
  siTypescript,
} from 'simple-icons';

type SkillGroup = {
  id: string;
  category: string;
  description: string;
  items: readonly SimpleIcon[];
};

@Component({
  imports: [],
  selector: 'app-tech-stack',
  styleUrl: './tech-stack.scss',
  templateUrl: './tech-stack.html',
})
export class TechStack {
  protected readonly groups: readonly SkillGroup[] = [
    {
      id: '01',
      category: 'FRONTEND',
      description: 'Interfaces & Web-Anwendungen',
      items: [siHtml5, siCss, siSass, siJavascript, siTypescript, siAngular],
    },
    {
      id: '02',
      category: 'BACKEND',
      description: 'Daten, Auth & Schnittstellen',
      items: [siFirebase, siSupabase, { ...siOpenapiinitiative, title: 'REST API' }],
    },
    {
      id: '03',
      category: 'TOOLS',
      description: 'Versionskontrolle & Tooling',
      items: [siGit, siGithub, siNpm, siPnpm],
    },
    {
      id: '04',
      category: 'METHODEN',
      description: 'Struktur & Entwicklungsprinzipien',
      items: [
        { ...siScrumalliance, title: 'SCRUM' },
        { ...siGooglechrome, title: 'Responsive' },
        { ...siCodeforces, title: 'OOP' },
      ],
    },
  ];

  // Two-digit item counter shown in the card header, e.g. "03"
  protected count(group: SkillGroup): string {
    return group.items.length.toString().padStart(2, '0');
  }
}
