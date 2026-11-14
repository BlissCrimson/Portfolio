import { Component } from '@angular/core';
import {
  type SimpleIcon,
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
  siOpenapiinitiative,
  siGit,
} from 'simple-icons';
import icons from 'simple-icons/icons.json';

@Component({
  imports: [],
  selector: 'app-tech-stack',
  styleUrl: './tech-stack.scss',
  templateUrl: './tech-stack.html',
})
export class TechStack {
  siRestAPI: SimpleIcon = { ...siOpenapiinitiative, title: 'RestAPI' };

  protected readonly frontendSkills: SimpleIcon[] = [
    siHtml5,
    siCss,
    siJavascript,
    siTypescript,
    siSass,
    siAngular,
  ];

  protected readonly backendSkills: SimpleIcon[] = [this.siRestAPI, siFirebase, siSupabase];

  protected readonly toolSkills: SimpleIcon[] = [siNpm, siPnpm, siGit, siGithub];

  protected readonly devSkills: SimpleIcon[] = [siYaml];
}
