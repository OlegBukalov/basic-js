const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (this.arr[position-1] == undefined){
      this.arr = [];
      throw new Error('Error');
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    this.arr.forEach((e, i) => {
      if (i == 0) {
        str += '( '
      };
      str += e + ' )~~( ';
      if (i == this.arr.length - 1) {
        str = str.substr(0, str.length - 4);
      };
    });
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;