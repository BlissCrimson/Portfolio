import { Component } from '@angular/core';
import { Projects } from './projects/projects';
import { TechStack } from './tech-stack/tech-stack';
import { Contact } from './contact/contact';

@Component({
  imports: [Projects, TechStack, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
