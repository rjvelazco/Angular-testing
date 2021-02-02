import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('Medico Component', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [ HttpClientModule ]
    });

    // Regresa un ComponentFixture.
    fixture = TestBed.createComponent(MedicoComponent);
    // Asignamos una instancia del fixture para tener acceso al component HTML.
    component = fixture.componentInstance;
  });

  it('Debe de crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de crear retornar el nombre del medico', () => {
    const nombre = 'Rafael';
    const res = component.saludarMedico(nombre);
    expect(res).toContain(nombre);
  });

});