import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Translation } from '../../shared/services/translation';
import { socialLinks } from '../social-links';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly translation = inject(Translation);
  protected readonly socials = socialLinks;
  protected readonly year = new Date().getFullYear();
}
