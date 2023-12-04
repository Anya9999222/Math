import Character from './character';

export default class Daemon extends Character {
  constructor(name, distance) {
    super(name, distance);
    this._attack = 100;
    this.defence = 40;
  }
}
