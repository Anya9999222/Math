
import Daemon from "../js/daemon";


let daemon;

beforeEach(() => {
    daemon = new Daemon('Anya');
});

it('make usual attack', () => {
    daemon.setAttack(2);
    expect(daemon.attack).toBe(90)
});

it('make stoned attack', () => {
    daemon.getStoned();
    daemon.setAttack(2);
    expect(daemon.attack).toBe(85)
})