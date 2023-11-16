import Character from './character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', stoned) {
    super(name, type, stoned);
    this.attack = 100;
    this.defence = 40;
  }
}
