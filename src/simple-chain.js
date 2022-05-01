const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  str: "",

  getLength() {
    let tempArr = this.str.split("~~");
    console.log(tempArr.length);
    return tempArr.length;
  },

  addLink(value) {
    if (this.str === "" && value !== undefined) {
      this.str += `( ${value} )`;
    } else if (this.str === "" && value == undefined) {
      this.str += `( )`;
    } else if (this.str !== "" && value !== undefined) {
      this.str += `~~( ${value} )`;
    } else {
      this.str += `~~( )`;
    }

    return this;
  },

  removeLink(position) {
    let tempArr = this.str.split("~~");

    if (
      typeof position !== "number" ||
      Math.round(position) !== position ||
      position > tempArr.length ||
      position <= 0
    ) {
      this.str = "";
      throw new Error("You can't remove incorrect link!");
    }

    tempArr.splice(position - 1, 1);
    this.str = tempArr.join("~~");

    return this;
  },

  reverseChain() {
    let tempArr = this.str.split("~~");
    tempArr.reverse();
    this.str = tempArr.join("~~");
    return this;
  },

  finishChain() {
    let result = this.str;
    this.str = "";
    return result;
  },
};

module.exports = {
  chainMaker,
};
