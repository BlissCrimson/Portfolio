import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Arrow, scrollToSection } from '../../../shared/components/arrow/arrow';
import { Translation } from '../../../shared/services/translation';

@Component({
  imports: [Arrow, RouterLink],
  selector: 'app-why-me',
  styleUrl: './why-me.scss',
  templateUrl: './why-me.html',
})
export class WhyMe {
  protected readonly translation = inject(Translation);
  protected readonly scrollToSection = scrollToSection;
}
