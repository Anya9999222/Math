import Character from './character';

export default class Magician extends Character {
  constructor(name, distance) {
    super(name, distance);
    this._attack = 10;
    this.defence = 40;
  }
}
