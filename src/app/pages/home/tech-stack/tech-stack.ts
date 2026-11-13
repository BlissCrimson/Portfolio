import { Component } from '@angular/core';
import {
  siTypescript,
  siAngular,
  siSass,
  siHtml5,
  siGithub,
  siNpm,
  siPnpm,
  siJavascript,
  siFirebase,
  siSupabase,
  siCss,
  siYaml,
  type SimpleIcon,
  siOpenapiinitiative,
} from 'simple-icons';

@Component({
  imports: [],
  selector: 'app-tech-stack',
  styleUrl: './tech-stack.scss',
  templateUrl: './tech-stack.html',
})
export class TechStack {
  protected readonly frontendSkills: SimpleIcon[] = [
    siHtml5,
    siCss,
    siJavascript,
    siOpenapiinitiative,
    siTypescript,
    siSass,
    siAngular,
  ];

  protected readonly backendSkills: SimpleIcon[] = [siFirebase, siSupabase];

  protected readonly toolSkills: SimpleIcon[] = [siNpm, siPnpm, siGithub];

  protected readonly devSkills: SimpleIcon[] = [siYaml];
}
