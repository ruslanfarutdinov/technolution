class CashRegister {
  constructor() {
    this.max = this.min = null;
    this.sum = 0;
    this.count = 0;
    this.prices = {};
  }

  ringUp(price) {
    if (typeof price !== 'number') {
      throw new TypeError('Argument must be a number');
    }

    if (this.max === null && this.min === null) {
      this.max = this.min = price;
    } else {
      if (price > this.max) {
        this.max = price;
      } else if (price < this.min) {
        this.min = price;
      }
    }
    
    this.sum += price;
    this.count++;
    this.prices[price] ? this.prices[price]++ : this.prices[price] = 1;
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.sum / this.count;
  }

  getMode() {
    let highestOccurence = 0;
    let output = '';
    for (let price in this.prices) {
      if (this.prices[price] > highestOccurence) {
        highestOccurence = this.prices[price];
        output = price;
      }
    }
    return Number(output);
  }
}

module.exports = CashRegister;
