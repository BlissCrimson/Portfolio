import { Component, inject } from '@angular/core';
import { Arrow } from '../../../shared/components/arrow/arrow';
import { Translation } from '../../../shared/services/translation';

@Component({
  imports: [Arrow],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly translation = inject(Translation);
}
