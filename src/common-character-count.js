const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str1 = s1.split("");
  let str2 = s2.split("");
  let counter = 0;
  for (let i = 0; i < str1.length; i++) {
    let check = 0; // if cycle find common characters — check>0

    for (let j = 0; j < str2.length; ) {
      if (str2[j] == str1[i]) {
        str1.splice(i, 1);
        str2.splice(j, 1);
        counter++;
        check++;
      } else {
        j++;
      }
    }
    if (check > 0) {
      check = 0;
      i--; // for avoid exception 0-element of str1
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
