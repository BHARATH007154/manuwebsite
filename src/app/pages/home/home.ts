import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements AfterViewInit {
  @ViewChildren('statValue') statValues?: QueryList<ElementRef<HTMLSpanElement>>;

  ngAfterViewInit(): void {
    const items = this.statValues?.toArray() ?? [];

    if (!items.length) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      items.forEach((item) => {
        const element = item.nativeElement;
        const target = Number(element.getAttribute('data-target') ?? '0');
        const suffix = element.getAttribute('data-suffix') ?? '';
        element.textContent = `${target}${suffix}`;
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const target = Number(element.getAttribute('data-target') ?? '0');
          const duration = 1200;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            const value = Math.round(target * eased);
            element.textContent = `${value}${element.getAttribute('data-suffix') ?? ''}`;

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          observer.unobserve(element);
        });
      },
      { threshold: 0.35 },
    );

    items.forEach((item) => observer.observe(item.nativeElement));
  }
}
