const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed arr based on the control sequences that original
 * arr contains
 *
 * @param {Array} arr initial arr
 * @returns {Array} transformed arr
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--double-next") {
      if (arr[i + 1] === undefined) {
        continue;
      } else {
        transformedArray.push(arr[i + 1]);
      }
    } else if (arr[i] === "--discard-prev") {
      transformedArray.pop();
    } else if (arr[i] === "--double-prev") {
      if (arr[i - 1] === undefined) {
      } else {
        transformedArray.push(arr[i - 1]);
      }
    } else if (arr[i] === "--discard-next") {
      i += 2;
    } else {
      transformedArray.push(arr[i]);
    }
  }
  return transformedArray;
}

module.exports = {
  transform,
};
