import { Component, Input } from '@angular/core';
import { ReviewItem } from '../../models/review-item.interface';

@Component({
  selector: 'app-review-item',
  standalone: true,
  imports: [],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.scss',
})
export class ReviewItemComponent {
  @Input() review!: ReviewItem;

  routeToFacebookReview(): void {
    window.open('https://www.facebook.com/oritgalili8/reviews/', "_blank");
  }
}
