import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { isPlatformBrowser } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  observer!: IntersectionObserver;
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private homeCmp: ElementRef
  ) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollAnchor =
        this.homeCmp.nativeElement.querySelector('.scroll-anchor');
        const header = this.homeCmp.nativeElement.querySelector('app-header');
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              header.nativeElement.classList.remove('scrolled');
            } else {
              header.nativeElement.classList.add('scrolled');
            }
          });
        },
        {
          threshold: [0],
        }
      );

      this.observer.observe(scrollAnchor);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
