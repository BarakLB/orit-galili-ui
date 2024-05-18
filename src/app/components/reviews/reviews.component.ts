import { Component } from '@angular/core';
import { ReviewItemComponent } from '../review-item/review-item.component';
import { reviewsConfig } from './reviews.config';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewItemComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  reviews = reviewsConfig;
}
