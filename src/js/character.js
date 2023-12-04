export default class Character {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }

  get stoned() {
    return this._stoned
  }

  set stoned(x) {
    this._stoned = x;
  }

  get attack() {
    this._attack -= this._attack * ((this.distance - 1) / 10);
    if(this._stoned){
      this._attack -= Math.log2(this.distance) * 5;
    }
    return this._attack
  }

  set attack(x) {
    this._attack = x;
  }
}
