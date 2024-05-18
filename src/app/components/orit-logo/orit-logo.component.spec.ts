import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OritLogoComponent } from './orit-logo.component';

describe('OritLogoComponent', () => {
  let component: OritLogoComponent;
  let fixture: ComponentFixture<OritLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OritLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OritLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
