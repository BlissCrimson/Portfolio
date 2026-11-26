import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  siAngular,
  siCss,
  siFirebase,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNpm,
  siOpenapiinitiative,
  siPnpm,
  siSass,
  siSupabase,
  siTypescript,
  siVitest,
} from 'simple-icons';
import { Arrow, scrollToSection } from '../../../shared/components/arrow/arrow';
import { Translation } from '../../../shared/services/translation';

type Skill = { title: string; path: string };

// simple-icons has no Playwright logo, so a neutral "run test" symbol is used
const playwright: Skill = {
  title: 'Playwright',
  path: 'M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22ZM9 7v10l8-5Z',
};

// Own sprint loop symbol; the available brand icon is only an unreadable wordmark
const scrum: Skill = {
  title: 'Scrum',
  path: 'M12 3a8 8 0 0 1 7.7 5.8H22l-3.5 4.4L15 8.8h2.2a5.4 5.4 0 1 0-5.2 6.9h10V19H12a8 8 0 0 1 0-16ZM20 15.2l3.5 2.2-3.5 4.1Z',
};

@Component({
  imports: [Arrow, RouterLink],
  selector: 'app-tech-stack',
  styleUrl: './tech-stack.scss',
  templateUrl: './tech-stack.html',
})
export class TechStack {
  protected readonly translation = inject(Translation);
  protected readonly scrollToSection = scrollToSection;

  protected readonly skills: readonly Skill[] = [
    siAngular,
    siTypescript,
    siJavascript,
    siHtml5,
    siCss,
    siSass,
    { title: 'REST API', path: siOpenapiinitiative.path },
    siFirebase,
    siSupabase,
    siGit,
    siGithub,
    siNpm,
    siPnpm,
    playwright,
    siVitest,
    scrum,
  ];
}
