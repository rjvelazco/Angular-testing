import { FormularioLogin } from './formulario';
import { FormBuilder, } from '@angular/forms';

describe('Formularios', () => {

  let componente: FormularioLogin;

  beforeEach(() => {
    componente = new FormularioLogin(new FormBuilder);
  });

  it('Debe de crear un formulario con dos campos email y password', () => {
    
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();

  });

  it('El email debe de ser obligatorio', () => {
    
    const control = componente.form.get('email');
    control.setValue('');

    expect(control.valid).toBeFalsy();

  });

  it('El email debe ser un email', () => {
    
    const control = componente.form.get('email');
    control.setValue('rjvelazco_7@hotmail.com');
    expect(control.valid).toBeTruthy();
  
  });

  it('El password debe de ser obligatorio', () => {
    
    const control = componente.form.get('password');
    control.setValue('');

    expect(control.valid).toBeFalsy();

  });

});