const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp += str[i];
    if (temp[temp.length - 1] == str[i + 1]) {
      continue;
    } else {
      result.push(temp);
      temp = "";
      // console.log(result);
    }
  }

  // console.log(
  //   result
  //     .map((item) => {
  //       if (item.length == 1) {
  //         return `${item[0]}`;
  //       } else {
  //         return `${item.length}${item[0]}`;
  //       }
  //     })
  //     .join("")
  // );

  return result
    .map((item) => {
      if (item.length == 1) {
        return `${item[0]}`;
      } else {
        return `${item.length}${item[0]}`;
      }
    })
    .join("");
}

encodeLine("aabbbc");
module.exports = {
  encodeLine,
};
