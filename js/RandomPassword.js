function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// charcodes
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

export class RandomPassword {
  constructor(
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
    passwordLength
  ) {
    this.includeLowercase = includeLowercase;
    this.includeUppercase = includeUppercase;
    this.includeNumbers = includeNumbers;
    this.includeSymbols = includeSymbols;
    this.passwordLength = passwordLength;
    let charCodes = [];
    this.verified = false;
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

    while (!this.verified) {
      let password = [];
      for (let i = 0; i < passwordLength; i++) {
        let charCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        let char = String.fromCharCode(charCode);
        password.push(char);
      }
      this.password = password.join("");
      this.verify();
    }
  }

  verify() {
    if (this.includeLowercase) {
      if (
        !LOWERCASE_CHAR_CODES.some((charCode) => {
          return this.password.includes(String.fromCharCode(charCode));
        })
      ) {
        return false;
      }
    }

    if (this.includeUppercase) {
      if (
        !UPPERCASE_CHAR_CODES.some((charCode) => {
          return this.password.includes(String.fromCharCode(charCode));
        })
      ) {
        return false;
      }
    }

    if (this.includeNumbers) {
      if (
        !NUMBER_CHAR_CODES.some((charCode) => {
          return this.password.includes(String.fromCharCode(charCode));
        })
      ) {
        return false;
      }
    }

    if (this.includeSymbols) {
      if (
        !SYMBOL_CHAR_CODES.some((charCode) => {
          return this.password.includes(String.fromCharCode(charCode));
        })
      ) {
        return false;
      }
    }

    this.verified = true;
  }
}
