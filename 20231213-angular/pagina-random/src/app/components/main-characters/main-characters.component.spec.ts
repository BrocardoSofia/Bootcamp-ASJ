import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCharactersComponent } from './main-characters.component';

describe('MainCharactersComponent', () => {
  let component: MainCharactersComponent;
  let fixture: ComponentFixture<MainCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
