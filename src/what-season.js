const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const seasons = ["winter", "spring", "summer", "autumn"];
  let month = date.getMonth();

  if (typeof date.getMonth !== "function") {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date && !isNaN(date))) {
    throw new Error("Invalid date!");
  }

  if ((month >= 0 && month < 2) || month == 11) {
    return seasons[0];
  } else if (month >= 2 && month < 5) {
    return seasons[1];
  } else if (month >= 5 && month < 8) {
    return seasons[2];
  } else if (month >= 8 && month < 11) {
    return seasons[3];
  }
}

console.log(getSeason(new Date(1556, 3, 9, 21, 17, 46, 991)));
module.exports = {
  getSeason,
};
