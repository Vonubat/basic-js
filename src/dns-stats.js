const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let temp = [];
  let firstDomainStorage = [];
  let secondDomainStorage = [];
  let thirdDomainStorage = [];
  let result = {};

  for (const item of domains) {
    temp.push(item.split(".").reverse().join("."));
  }
  // console.log(temp);

  if (!domains.length) {
    return {};
  }

  for (let i = 0; i < temp.length; i++) {
    let firstDot = temp[i].indexOf(".");
    let secondDot = temp[i].indexOf(".", firstDot + 1);

    if (firstDot !== -1) {
      firstDomainStorage.push(`.${temp[i].slice(0, firstDot)}`);
    }

    if (secondDot !== -1) {
      secondDomainStorage.push(
        `.${temp[i].slice(0, firstDot)}.${temp[i].slice(
          firstDot + 1,
          secondDot
        )}`
      );
    }

    if (secondDot == -1) {
      secondDomainStorage.push(`.${temp[i]}`);
    }

    if (firstDot !== -1 && secondDot !== -1) {
      thirdDomainStorage.push(`.${temp[i]}`);
    }

    // let firstDomain = temp[i].slice(0, firstDot);
    // let secondDomain = temp[i].slice(firstDot + 1, secondDot);
    // let thirdDomain = temp[i].slice(secondDot + 1, temp[i].length);
    // console.log(firstDot);
    // console.log(secondDot);
    // console.log(firstDomain);
    // console.log(secondDomain);
    // console.log(thirdDomain);
  }
  // console.log(firstDomainStorage);
  // console.log(secondDomainStorage);
  // console.log(thirdDomainStorage);

  result[firstDomainStorage[0]] = firstDomainStorage.length;
  result[secondDomainStorage[0]] = secondDomainStorage.length;
  for (const uniqueDomain of thirdDomainStorage) {
    result[uniqueDomain] = 1;
  }
  console.log(result);
  return result;
}
domains1 = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];
domains2 = ["epam.com", "info.epam.com"];
domains3 = ["epam.com"];
getDNSStats(domains1);
getDNSStats(domains2);
getDNSStats(domains3);

module.exports = {
  getDNSStats,
};
