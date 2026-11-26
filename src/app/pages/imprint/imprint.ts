import { Component, inject } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { Arrow } from '../../shared/components/arrow/arrow';
import { Translation } from '../../shared/services/translation';

@Component({
  imports: [Arrow, Footer],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {
  protected readonly translation = inject(Translation);
}
