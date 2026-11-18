import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  links = [
    { id: 'about', label: 'About Me' },
    { id: 'techstack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projekte' },
    { id: 'contact', label: 'Kontakt' },
  ];
  active = signal('');
  private observer?: IntersectionObserver;

@HostListener('window:scroll')
  onScroll() {
    const line = window.innerHeight * 0.4;
    let current = '';
    for (const l of this.links) {
      const el = document.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= line) current = l.id;
    }
    this.active.set(current);
  }

  // ngAfterViewInit() {
  //   this.observer = new IntersectionObserver(
  //     (entries) => {
  //       for (const e of entries) {
  //         if (e.isIntersecting) this.active.set(e.target.id);
  //       }
  //     },
  //     { rootMargin: '-40% 0px -50% 0px' },
  //   );
  //   this.links.forEach((l) => {
  //     const el = document.getElementById(l.id);
  //     if (el) this.observer!.observe(el);
  //   });
  // }

  // ngOnDestroy() {
  //   this.observer?.disconnect();
  // }
}
