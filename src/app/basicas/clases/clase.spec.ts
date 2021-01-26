import { Jugador } from './clase';


describe('Pruebas de clase', () => {

  // const jugador = new Jugador();
  let jugador = new Jugador();

  beforeAll( ()=>{
    // console.log('beforeAll');
  });
  beforeEach( ()=>{
    
    // console.log('beforeEach');
    // jugador.hp = 100;
    jugador = new Jugador();
    
  });
  afterAll( ()=>{
    // console.log('afterAll');
  });
  afterEach( ()=>{
    // console.log('afterEach');
  });

  it('Debe de retornar 80 de hp, si recibe 20 de dano', () => {
    
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);

  });

  it('Debe de retornar 50 de hp, si recibe 50 de dano', () => {
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 de hp, si recibe 100 de dano', () => {

    const resp = jugador.recibeDanio(100);
    expect(resp).toBe(0);
  });

});