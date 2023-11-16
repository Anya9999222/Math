import Character from './character';

export default class Daemon extends Character {
  constructor(name, stoned, type = 'Daemon') {
    super(name, type, stoned);
    this.attack = 100;
    this.defence = 40;
  }
}
