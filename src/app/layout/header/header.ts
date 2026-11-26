import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { scrollToSection } from '../../shared/components/arrow/arrow';
import { Language, Translation } from '../../shared/services/translation';
import { Navbar } from '../navbar/navbar';
import { socialLinks } from '../social-links';

@Component({
  imports: [Navbar, RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class Header {
  protected readonly translation = inject(Translation);
  protected readonly socials = socialLinks;
  protected readonly languages: readonly Language[] = ['de', 'en'];
  protected readonly menuOpen = signal(false);
  protected readonly scrollToSection = scrollToSection;
}
