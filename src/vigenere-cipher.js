const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    if (value === true || value === undefined) {
      this.encrypt = this.encryptDirect;
      this.decrypt = this.decryptDirect;
    } else if (value === false) {
      this.encrypt = this.encryptReverse;
      this.decrypt = this.decryptReverse;
    }
  }

  encryptDirect(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let alphabet = this.alphabet;
    let stringTemp = string.toUpperCase().split("");
    let keyTemp = key.toUpperCase().split("");

    let difference = stringTemp.length - keyTemp.length;

    if (difference > 0) {
      increaseKey();
    } else {
      decreaseKey();
    }

    function increaseKey() {
      for (let i = 0; i < difference; i++) {
        keyTemp.push(keyTemp[i]);
      }
      for (let i = 0; i < stringTemp.length; i++) {
        if (stringTemp[i] == " ") {
          keyTemp.splice(i, 0, " ");
        }
      }
      keyTemp.length = stringTemp.length;
    }

    function decreaseKey() {
      for (let i = 0; i > difference; i--) {
        keyTemp.pop();
      }
      for (let i = 0; i < stringTemp.length; i++) {
        if (stringTemp[i] == " ") {
          keyTemp.splice(i, 0, " ");
        }
      }
      keyTemp.length = stringTemp.length;
    }

    function encrypt() {
      for (let i = 0; i < stringTemp.length; i++) {
        if (alphabet.includes(stringTemp[i])) {
          let index =
            (alphabet.indexOf(stringTemp[i]) + alphabet.indexOf(keyTemp[i])) %
            alphabet.length;
          stringTemp[i] = alphabet[index];
        } else {
          continue;
        }
      }
    }

    encrypt();

    let result = stringTemp.join("");
    // console.log(stringTemp);
    // console.log(keyTemp);
    // console.log(result);
    return result;
  }

  decryptDirect(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let alphabet = this.alphabet;
    let stringTemp = string.toUpperCase().split("");
    let keyTemp = key.toUpperCase().split("");

    let difference = stringTemp.length - keyTemp.length;

    if (difference > 0) {
      increaseKey();
    } else {
      decreaseKey();
    }

    function increaseKey() {
      for (let i = 0; i < difference; i++) {
        keyTemp.push(keyTemp[i]);
      }
      for (let i = 0; i < stringTemp.length; i++) {
        if (stringTemp[i] == " ") {
          keyTemp.splice(i, 0, " ");
        }
      }
      keyTemp.length = stringTemp.length;
    }

    function decreaseKey() {
      for (let i = 0; i > difference; i--) {
        keyTemp.pop();
      }
      for (let i = 0; i < stringTemp.length; i++) {
        if (stringTemp[i] == " ") {
          keyTemp.splice(i, 0, " ");
        }
      }
      keyTemp.length = stringTemp.length;
    }

    function encrypt() {
      for (let i = 0; i < stringTemp.length; i++) {
        if (alphabet.includes(stringTemp[i])) {
          let index = Math.abs(
            (alphabet.indexOf(stringTemp[i]) +
              alphabet.length -
              alphabet.indexOf(keyTemp[i])) %
              alphabet.length
          );
          stringTemp[i] = alphabet[index];
        } else {
          continue;
        }
      }
    }

    encrypt();

    let result = stringTemp.join("");
    // console.log(stringTemp);
    // console.log(keyTemp);
    console.log(result);
    return result;
  }

  encryptReverse(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let alphabet = this.alphabet;
    let stringTemp = string.toUpperCase().split("");
    let keyTemp = key.toUpperCase().split("");

    let difference = stringTemp.length - keyTemp.length;

    if (difference > 0) {
      increaseKey();
    } else {
      decreaseKey();
    }

    function increaseKey() {
      for (let i = 0; i < difference; i++) {
        keyTemp.push(keyTemp[i]);
      }
      for (let i = 0; i < stringTemp.length; i++) {
        if (stringTemp[i] == " ") {
          keyTemp.splice(i, 0, " ");
        }
      }
      keyTemp.length = stringTemp.length;
    }

    function decreaseKey() {
      for (let i = 0; i > difference; i--) {
        keyTemp.pop();
      }
      for (let i = 0; i < stringTemp.length; i++) {
        if (stringTemp[i] == " ") {
          keyTemp.splice(i, 0, " ");
        }
      }
      keyTemp.length = stringTemp.length;
    }

    function encrypt() {
      for (let i = 0; i < stringTemp.length; i++) {
        if (alphabet.includes(stringTemp[i])) {
          let index =
            (alphabet.indexOf(stringTemp[i]) + alphabet.indexOf(keyTemp[i])) %
            alphabet.length;
          stringTemp[i] = alphabet[index];
        } else {
          continue;
        }
      }
    }

    encrypt();

    let result = stringTemp.reverse().join("");
    // console.log(stringTemp);
    // console.log(keyTemp);
    // console.log(result);
    return result;
  }

  decryptReverse(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let alphabet = this.alphabet;
    let stringTemp = string.toUpperCase().split("");
    let keyTemp = key.toUpperCase().split("");

    let difference = stringTemp.length - keyTemp.length;

    if (difference > 0) {
      increaseKey();
    } else {
      decreaseKey();
    }

    function increaseKey() {
      for (let i = 0; i < difference; i++) {
        keyTemp.push(keyTemp[i]);
      }
      for (let i = 0; i < stringTemp.length; i++) {
        if (stringTemp[i] == " ") {
          keyTemp.splice(i, 0, " ");
        }
      }
      keyTemp.length = stringTemp.length;
    }

    function decreaseKey() {
      for (let i = 0; i > difference; i--) {
        keyTemp.pop();
      }
      for (let i = 0; i < stringTemp.length; i++) {
        if (stringTemp[i] == " ") {
          keyTemp.splice(i, 0, " ");
        }
      }
      keyTemp.length = stringTemp.length;
    }

    function encrypt() {
      for (let i = 0; i < stringTemp.length; i++) {
        if (alphabet.includes(stringTemp[i])) {
          let index = Math.abs(
            (alphabet.indexOf(stringTemp[i]) +
              alphabet.length -
              alphabet.indexOf(keyTemp[i])) %
              alphabet.length
          );
          stringTemp[i] = alphabet[index];
        } else {
          continue;
        }
      }
    }

    encrypt();

    let result = stringTemp.reverse().join("");
    // console.log(stringTemp);
    // console.log(keyTemp);
    // console.log(result);
    return result;
  }
}
let machine = new VigenereCipheringMachine(true);
machine.decryptDirect(" UWJJW XAGWLNFM VNNNDXHVWWL :)", "js");

module.exports = {
  VigenereCipheringMachine,
};
