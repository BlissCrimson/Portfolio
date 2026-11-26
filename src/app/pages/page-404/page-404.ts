import { Component, inject } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { Arrow } from '../../shared/components/arrow/arrow';
import { Translation } from '../../shared/services/translation';

@Component({
  imports: [Arrow, Footer],
  selector: 'app-page-404',
  styleUrl: '../imprint/imprint.scss',
  templateUrl: './page-404.html',
})
export class Page404 {
  protected readonly translation = inject(Translation);
}
