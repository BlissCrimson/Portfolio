import { Component, inject } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { Arrow } from '../../shared/components/arrow/arrow';
import { Translation } from '../../shared/services/translation';

@Component({
  imports: [Arrow, Footer],
  selector: 'app-privacy',
  styleUrl: '../imprint/imprint.scss',
  templateUrl: './privacy.html',
})
export class Privacy {
  protected readonly translation = inject(Translation);
}
