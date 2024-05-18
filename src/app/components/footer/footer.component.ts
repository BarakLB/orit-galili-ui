import { Component } from '@angular/core';
import { OritLogoComponent } from '../orit-logo/orit-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [OritLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
