import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasAltaComponent } from './peliculas-alta.component';

describe('PeliculasAltaComponent', () => {
  let component: PeliculasAltaComponent;
  let fixture: ComponentFixture<PeliculasAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasAltaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
