const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let temp = [];
  let numArr = [];
  let number = (n + "").split("");

  for (let i = 0; i < number.length; i++) {
    let deleteElem = number.splice(i, 1);
    temp.push(number.slice());
    number.splice(i, 0, deleteElem[0]);
    // console.log(temp);
  }

  for (const item of temp) {
    numArr.push(Number(item.join("")));
  }
  // console.log(number);
  // console.log(temp);
  // console.log(numArr);
  // console.log(Math.max(...numArr));

  return Math.max(...numArr);
}

deleteDigit(152);
module.exports = {
  deleteDigit,
};
