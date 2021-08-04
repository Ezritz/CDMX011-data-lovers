import { getPokemonsByName } from '../src/data.js';



describe('getPokemonsByName', () => {
  it('deberia ser una funcion', () => {
    expect(typeof getPokemonsByName).toBe('function');
  });

  it('deberia retornar "null" para ""', () => {
    expect(getPokemonsByName()).toBe('null');
  });
});


