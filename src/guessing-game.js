class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.gNumer = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.gNumer = Math.round((this.max + this.min) / 2);
    return this.gNumer;
  }

  lower() {
    this.max = this.gNumer;
  }

  greater() {
    this.min = this.gNumer;
  }
}

module.exports = GuessingGame;
