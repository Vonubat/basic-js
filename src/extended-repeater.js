const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  let addition;
  if (options.addition === undefined) {
    addition = "";
  } else {
    addition = String(options.addition);
  }

  let repeatTimes;
  if (!options.repeatTimes) {
    repeatTimes = 1;
  } else {
    repeatTimes = options.repeatTimes;
  }

  let additionRepeatTimes;
  if (!options.additionRepeatTimes) {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  let separator;
  if (!options.separator) {
    separator = "+";
  } else {
    separator = options.separator;
  }

  let additionSeparator;
  if (!options.additionSeparator) {
    additionSeparator = "|";
  } else {
    additionSeparator = options.additionSeparator;
  }

  let step_1 = `${str}`;
  let step_2 = `${(addition + additionSeparator).repeat(additionRepeatTimes)}`;
  step_2 = step_2.slice(0, step_2.length - additionSeparator.length); // del last additionSeparator
  let step_3 = `${separator}`;

  let result = (step_1 + step_2 + step_3).repeat(repeatTimes);
  result = result.slice(0, result.length - separator.length); // del last separator

  console.log(result);
  return result;
}

repeater(null, {
  repeatTimes: 3,
  separator: "??? ",
  addition: null,
  additionRepeatTimes: 3,
  additionSeparator: "!!!",
});

module.exports = {
  repeater,
};
