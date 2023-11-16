import Character from '../js/character';

let character;
beforeEach(() => {
  character = new Character('Anya', 'Daemon');
});
it('returns mistake', () => {
  character = new Character('Anya', 'Zombie');
  expect(character.setAttack(5)).toEqual('method works with daemon and magician only');
});

it('make stoned', () => {
  character.getStoned();
  expect(character.stoned).toBe(true);
});
