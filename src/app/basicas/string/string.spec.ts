import { mensaje } from "./string";
/*
  // Conjunto de pruebas
  describe('Pruebas de Strings');
  
  // Prueba especifica
  it('Debe de regregar un string');

*/

describe('Pruebas de strings', () => {
  
  it('Debe de regresar un string', () => {

    const resp = mensaje('Rafael');

    expect((typeof resp)).toBe('string');

  });

  it('Debe de regresar un saludo con el nombre enviado', () => {
    
    const nombre = 'Rafael'
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);

  });


});

