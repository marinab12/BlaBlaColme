import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTrayectoComponent } from './crear-trayecto.component';

describe('CrearTrayectoComponent', () => {
  let component: CrearTrayectoComponent;
  let fixture: ComponentFixture<CrearTrayectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTrayectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
