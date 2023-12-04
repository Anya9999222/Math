import Daemon from '../js/daemon';

let daemon;

beforeEach(() => {
  daemon = new Daemon('Anya', 2);
});

it('make usual attack', () => {
  expect(daemon.attack).toBe(90);
});

it('make stoned attack', () => {
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});

it('make stoned', () => {
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
});