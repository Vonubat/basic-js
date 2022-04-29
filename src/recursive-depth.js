const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    // let flattedArr = [];

    // count max depth (without recursion)

    for (let i = 0; i < 30; i++) {
      let temp = arr.flat(i);
      let arrCheck = 0;
      for (let item of temp) {
        if (Array.isArray(item)) {
          arrCheck++;
        }
      }
      if (arrCheck > 0) {
        counter++;
      }
    }

    // implement .flat()
    // function recursion(arr) {
    //   let check = 0;
    //   for (let item of arr) {
    //     if (!Array.isArray(item)) {
    //       flattedArr.push(item);
    //     } else {
    //       check++;
    //       recursion(item);
    //     }
    //   }
    //   console.log(check);
    //   if (check == 1) {
    //     counter++;
    //   }
    // }

    // recursion(arr);
    // console.log(flattedArr);
    // console.log(counter);

    return counter;
  }
}

const depthCalc = new DepthCalculator();

// depthCalc.calculateDepth([1, 2, 3, 4, 5]);

depthCalc.calculateDepth([
  1,
  2,
  3,
  4,
  [1, 2, [1, 2, [[[]]]]],
  5,
  [1, [[[[[[]]]]]]],
]);

// depthCalc.calculateDepth([[[]]]);

module.exports = {
  DepthCalculator,
};
