const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(arguments.length === 0) {
      this.arr.push('(  )')
    } else {
      this.arr.push(`( ${value} )`)
    }

    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.arr.length || !Number.isInteger(position)) {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    } else {
      this.arr.splice(position - 1, 1)
    }

    return this;
  },
  reverseChain() {
    this.arr.reverse()
    return this;
  },
  finishChain() {
    const chain = this.arr.map((el) => el).join('~~');
    this.arr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
