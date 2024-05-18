import { Component } from '@angular/core';
import { OritLogoComponent } from '../orit-logo/orit-logo.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [OritLogoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
