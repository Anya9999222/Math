export default class Character {
  constructor(name, type, stoned = false) {
    this.name = name;
    this.type = type;
    this.attack = undefined;
    this.defence = undefined;
    this.stoned = stoned;
  }

  getStoned() {
    this.stoned = true;
  }

  setStoned(x) {
    this.attack -= Math.log2(x) * 5;
    this.getAttack(x);
  }

  getAttack(x) {
    this.attack -= Math.round(this.attack * ((x - 1) / 10));
    return this.attack;
  }

  setAttack(x) {
    if ((this.type !== 'Daemon' && this.type !== 'Magician') || x < 1 || x > 5) {
      return 'method works with daemon and magician only';
    }
    if (this.stoned === true) {
      this.setStoned(x);
    } else {
      this.getAttack(x);
    }
  }
}
