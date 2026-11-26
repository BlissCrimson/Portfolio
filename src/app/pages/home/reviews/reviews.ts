import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Arrow } from '../../../shared/components/arrow/arrow';
import { Translation } from '../../../shared/services/translation';

@Component({
  imports: [Arrow],
  selector: 'app-reviews',
  styleUrl: './reviews.scss',
  templateUrl: './reviews.html',
})
export class Reviews {
  private readonly list = viewChild.required<ElementRef<HTMLElement>>('list');

  protected readonly translation = inject(Translation);
  // Placeholder slots until real quotes are available
  protected readonly slots = [0, 1, 2];
  protected readonly selected = signal(0);

  // Mobile carousel: keeps the dots in sync with swiping
  protected onScroll(): void {
    const list = this.list().nativeElement;
    const distance = list.scrollWidth - list.clientWidth;
    const progress = distance ? list.scrollLeft / distance : 0;
    this.selected.set(Math.round(progress * (this.slots.length - 1)));
  }

  protected show(index: number): void {
    const list = this.list().nativeElement;
    const item = list.children[index] as HTMLElement;
    list.scrollTo({ left: item.offsetLeft - list.offsetLeft, behavior: 'smooth' });
  }
}
