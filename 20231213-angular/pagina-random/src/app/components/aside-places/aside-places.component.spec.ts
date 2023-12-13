import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePlacesComponent } from './aside-places.component';

describe('AsidePlacesComponent', () => {
  let component: AsidePlacesComponent;
  let fixture: ComponentFixture<AsidePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsidePlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsidePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
