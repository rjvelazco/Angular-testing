import { obtenerRobots } from './arreglos';

xdescribe('Pruebas de arreglos', () => {
  
  it('Debe devolver al menos 3 elementos', () => {
    
    const resp = obtenerRobots();

    expect(resp.length).toBeGreaterThanOrEqual(3);

  });

  
  it('Deben de existir Baymax y MegaMan', () => {
    
    const resp = obtenerRobots();

    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Baymax');

  });


});