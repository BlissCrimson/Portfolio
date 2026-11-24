import { Component, signal } from '@angular/core';

type Review = { name: string; role: string; quote: string };

@Component({
  imports: [],
  selector: 'app-reviews',
  styleUrl: './reviews.scss',
  templateUrl: './reviews.html',
  host: {
    '(keydown.arrowLeft)': 'switchReview(-1, $event)',
    '(keydown.arrowRight)': 'switchReview(1, $event)',
  },
})
export class Reviews {
  protected readonly reviews: readonly Review[] = [
    {
      name: 'Teammitglied A',
      role: 'Zusammenarbeit im Projekt',
      quote:
        'Matthias bringt Struktur ins Projekt und hat immer ein offenes Ohr für neue Ideen. Die Zusammenarbeit ist unkompliziert und lösungsorientiert.',
    },
    {
      name: 'Teammitglied B',
      role: 'Gemeinsame Entwicklung',
      quote:
        'Besonders schätze ich Matthias’ Blick fürs Detail. Er erklärt technische Themen verständlich und arbeitet mit viel Geduld an einer sauberen Lösung.',
    },
    {
      name: 'Projektkontakt C',
      role: 'Feedback zum Interface',
      quote:
        'Von der ersten Idee bis zum fertigen Interface denkt Matthias mit. Auf Feedback geht er konstruktiv ein und legt Wert auf eine intuitive Bedienung.',
    },
  ];

  protected readonly selected = signal(0);

  // Wraps around at both ends
  protected switchReview(direction: number, event?: Event): void {
    event?.preventDefault();
    const count = this.reviews.length;
    this.selected.update((current) => (current + direction + count) % count);
  }

  protected pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
