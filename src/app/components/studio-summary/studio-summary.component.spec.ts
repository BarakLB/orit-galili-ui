import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioSummaryComponent } from './studio-summary.component';

describe('StudioSummaryComponent', () => {
  let component: StudioSummaryComponent;
  let fixture: ComponentFixture<StudioSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudioSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudioSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
