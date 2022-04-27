const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let positions = [];
  let tempArr = [];
  const STATIC_ELEM = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == STATIC_ELEM) {
      positions.push(i);
    } else {
      tempArr.push(arr[i]);
    }
  }
  console.log(positions);
  tempArr.sort((a, b) => a - b);

  for (let i = 0; i < positions.length; i++) {
    tempArr.splice(positions[i], 0, STATIC_ELEM);
  }
  console.log(tempArr);
  return tempArr;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

module.exports = {
  sortByHeight,
};
