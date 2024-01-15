import * as vscode from 'vscode';

/**
 * if true many logs are generated and sent to the console
 */
const $$debugging = false;
const $$configNick = 'sampwdgenerator';
const configuration = vscode.workspace.getConfiguration($$configNick);

/**
 * Default values ​​to use to construct passwords. The values ​​are taken from
 * the configuration file but, failing that, the default values ​​are used.
 */
const defaultValues = {
  uppercases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercases: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '£$%&*§#@',
};

/**
 * Gets the list of uppercase letters from the configuration
 * file or from the default values.
 *
 * @returns {string[]} Array
 */
const getUpperCases = (): string[] => {
  let result = [];

  let values = configuration.get('uppercases');
  if (typeof values == 'string' && values.length !== 0) {
    result = values.split('');
  } else {
    result = defaultValues.uppercases.split('');
  }

  if ($$debugging) {
    console.log('§> getUpperCases', {
      values: values,
      result: result,
    });
  }

  return result;
};

/**
 * Gets the list of lowercase letters from the configuration file
 * or from the default values.
 *
 * @returns {string[]} Array
 */
const getLowerCases = (): string[] => {
  let result = [];

  let values = configuration.get('lowercases');
  if (typeof values == 'string' && values.length !== 0) {
    result = values.split('');
  } else {
    result = defaultValues.lowercases.split('');
  }

  if ($$debugging) {
    console.log('§> getLowerCases', {
      values: values,
      result: result,
    });
  }

  return result;
};

/**
 * Gets the list of numbers from the configuration file
 * or from the default values.
 *
 * @returns {string[]} Array
 */
const getNumbers = (): string[] => {
  let result = [];

  let values = configuration.get('numbers');
  if (typeof values == 'string' && values.length !== 0) {
    result = values.split('');
  } else {
    result = defaultValues.numbers.split('');
  }

  if ($$debugging) {
    console.log('§> getNumbers', {
      values: values,
      result: result,
    });
  }

  return result;
};

/**
 * Gets the list of symbols from the configuration file or from the default values.
 *
 * @returns {string[]} Array
 */
const getSymbols = (): string[] => {
  let result = [];

  let values = configuration.get('symbols');
  if (typeof values == 'string' && values.length !== 0) {
    result = values.split('');
  } else {
    result = defaultValues.symbols.split('');
  }

  if ($$debugging) {
    console.log('§> getSymbols', {
      values: values,
      result: result,
    });
  }

  return result;
};

/**
 * Takes an array of elements of any type and returns an array with the same elements,
 * but in random order. Uses the Fisher-Yates Sorting Algorithm applied three times.
 *
 * @param {any[]} ar An array of any item
 * @returns {any[]} an array of any items
 */
const shuffleArray = (ar: any[]): any[] => {
  let result = [...ar];
  for (let k = 1; k <= 3; k++) {
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
  }

  if ($$debugging) {
    console.log('§> shuffleArray', {
      ar: ar,
      result: result,
    });
  }

  return result;
};

/**
 * Takes a string and checks that it contains at least one character among
 * those contained in a given array
 *
 * @param {string} str the password to check
 * @param {string[]} strArr the array used to check the password
 * @returns {boolean}
 */
const checkPassword = (str: string, strArr: string[]): boolean => {
  let result = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (strArr.includes(char)) {
      result = true;
      break;
    }
  }

  if ($$debugging) {
    console.log('§> checkPassword', {
      str: str,
      strArr: strArr,
      result: result,
    });
  }

  return result;
};

/**
 * Takes a password (a string) and checks that it contains at least one uppercase
 * character, one lowercase character, one number and one special character.
 *
 * @param {string} str the password to check
 * @returns {boolean} true if the password is valid, false otherwise.
 */
const isValidPassword = (str: string): boolean => {
  let result = true;

  if (!checkPassword(str, getUpperCases())) {
    result = false;
  }

  if (!checkPassword(str, getLowerCases())) {
    result = false;
  }

  if (!checkPassword(str, getNumbers())) {
    result = false;
  }

  if (!checkPassword(str, getSymbols())) {
    result = false;
  }

  if ($$debugging) {
    console.log('§> isValidPassword', {
      str: str,
      result: result,
    });
  }

  return result;
};

/**
 * Constructs the character array to use to construct the password. The array
 * consists of all uppercase and lowercase characters, numbers and symbols
 * mixed together in various ways.
 *
 * @returns {string[]}
 */
const getPool = (): string[] => {
  const uCases: string[] = shuffleArray(getUpperCases());
  const lCases: string[] = shuffleArray(getLowerCases());
  const numbers: string[] = shuffleArray(getNumbers());
  const symbols: string[] = shuffleArray(getSymbols());

  let result: string[] = [];
  result = shuffleArray(result.concat(uCases, lCases, numbers, symbols));
  return result;
};

const getPwd = (length: number): string => {
  function randInt(num: number): number {
    return Math.floor(Math.random() * num);
  }

  let result = '';
  const pool = getPool();

  do {
    result = '';
    for (let i = 1; i <= length; i++) {
      const index = randInt(pool.length);
      result += pool[index];
    }
  } while (!isValidPassword(result));

  result = shuffleArray(result.split('')).join('');

  if ($$debugging) {
    console.log('§> getPwd', {
      length: length,
      pool: pool,
      result: result,
    });
  }

  return result;
};

export const getPwd8 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(8));
  }
  return result;
};

export const getPwd9 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(9));
  }
  return result;
};

export const getPwd10 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(10));
  }
  return result;
};

export const getPwd11 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(11));
  }
  return result;
};

export const getPwd12 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(12));
  }
  return result;
};

export const getPwd13 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(13));
  }
  return result;
};

export const getPwd14 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(14));
  }
  return result;
};

export const getPwd15 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(15));
  }
  return result;
};

export const getPwd16 = (): string[] => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(getPwd(16));
  }
  return result;
};

/* ================================================== */

if ($$debugging) {
  console.log(getPwd8());
  console.log(getPwd9());
  console.log(getPwd10());
  console.log(getPwd11());
  console.log(getPwd12());
  console.log(getPwd13());
  console.log(getPwd14());
  console.log(getPwd15());
  console.log(getPwd16());
  console.log(getPwd16());
  console.log(getPwd16());
  console.log(getPwd16());
  console.log(getPwd16());
}
