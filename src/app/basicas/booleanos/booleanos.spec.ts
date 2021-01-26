import { usuarioLogueado } from './booleanos';


describe('Pruebas de Booleanos', () => {
  it('Debe de retornar true', () => {
    const res = usuarioLogueado();

    expect(res).toBeTruthy();
    // expect(res).not.toBeFalsy();
  });
})