import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLandComponent } from './footer-land.component';

describe('FooterLandComponent', () => {
  let component: FooterLandComponent;
  let fixture: ComponentFixture<FooterLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
