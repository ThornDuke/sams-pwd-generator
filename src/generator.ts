import * as vscode from 'vscode';
import crypto from 'node:crypto';
import { $$debugging, configKey } from './globals';

/**
 * Default values ​​to use to construct passwords. The values ​​are taken from
 * the configuration file but, failing that, the default values ​​are used.
 */
const defaultValues = {
  passwords: 10,
  uppercases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  uppercaseOccurrences: 1,
  lowercases: 'abcdefghijklmnopqrstuvwxyz',
  lowercaseOccurrences: 1,
  numbers: '0123456789',
  numberOccurrences: 1,
  symbols: '£$%&*§#@',
  symbolOccurrences: 1,
};

/**
 * Produces a random integer between _min_ (inclusive)
 * and _max_ (inclusive), using the `crypto` library
 *
 * @param {number} min The lower limit
 * @param {number} max The upper limit
 * @returns {number} a random integer number
 */
const randomInt = (min: number, max: number): number => {
  const result = crypto.randomInt(min, max + 1);

  if ($$debugging) console.log('§> randomInt', { result });

  return result;
};

/**
 * Gets the amount of password produced each time the command is called.
 *
 * @returns {number} A list of upeercase chars
 */
const getPwdListLength = (): number => {
  let result = 0;
  const configuration = vscode.workspace.getConfiguration(configKey);

  let value = configuration.get('passwords');
  if (typeof value == 'number' && value !== 0) {
    result = value;
  } else {
    result = defaultValues.passwords;
  }

  if ($$debugging)
    console.log('§> getPwdListLength', { configuration, value, result });

  return result;
};

/**
 * Gets the list of uppercase letters from the configuration
 * file or from the default values.
 *
 * @returns {string[]} A list of upeercase chars
 */
const getUpperCases = (): string[] => {
  let result = [];
  const configuration = vscode.workspace.getConfiguration(configKey);

  let values = configuration.get('uppercases');
  if (typeof values == 'string' && values.length !== 0) {
    result = values.split('');
  } else {
    result = defaultValues.uppercases.split('');
  }

  if ($$debugging)
    console.log('§> getUpperCases', { configuration, values, result });

  return result;
};

/**
 * Gets the amount of uppercase letters occurrences from the configuration
 * file or from the default values.
 *
 * @returns {number}
 */
const getUpperCasesOccurrences = (): number => {
  let result = 0;
  const configuration = vscode.workspace.getConfiguration(configKey);

  let value = configuration.get('uppercaseOccurrences');
  if (typeof value == 'number' && value !== 0) {
    result = value;
  } else {
    result = defaultValues.uppercaseOccurrences;
  }

  if ($$debugging)
    console.log('§> getUpperCasesOccurrences', {
      configuration,
      value,
      result,
    });

  return result;
};

/**
 * Gets the list of lowercase letters from the configuration file
 * or from the default values.
 *
 * @returns {string[]} A list of lowercase chars
 */
const getLowerCases = (): string[] => {
  let result = [];
  const configuration = vscode.workspace.getConfiguration(configKey);

  let values = configuration.get('lowercases');
  if (typeof values == 'string' && values.length !== 0) {
    result = values.split('');
  } else {
    result = defaultValues.lowercases.split('');
  }

  if ($$debugging)
    console.log('§> getLowerCases', { configuration, values, result });

  return result;
};

/**
 * Gets the amount of lowercase letters occurrences from the configuration
 * file or from the default values.
 *
 * @returns {number}
 */
const getLowerCasesOccurrences = (): number => {
  let result = 0;
  const configuration = vscode.workspace.getConfiguration(configKey);

  let value = configuration.get('lowercaseOccurrences');
  if (typeof value == 'number' && value !== 0) {
    result = value;
  } else {
    result = defaultValues.lowercaseOccurrences;
  }

  if ($$debugging)
    console.log('§> getLowerCasesOccurrences', {
      configuration,
      value,
      result,
    });

  return result;
};

/**
 * Gets the list of numbers from the configuration file
 * or from the default values.
 *
 * @returns {string[]} A list of numbers
 */
const getNumbers = (): string[] => {
  let result = [];
  const configuration = vscode.workspace.getConfiguration(configKey);

  let values = configuration.get('numbers');
  if (typeof values == 'string' && values.length !== 0) {
    result = values.split('');
  } else {
    result = defaultValues.numbers.split('');
  }

  if ($$debugging)
    console.log('§> getNumbers', { configuration, values, result });

  return result;
};

/**
 * Gets the amount of digit occurrences from the configuration
 * file or from the default values.
 *
 * @returns {number}
 */
const getNumberOccurrences = (): number => {
  let result = 0;
  const configuration = vscode.workspace.getConfiguration(configKey);

  let value = configuration.get('numberOccurrences');
  if (typeof value == 'number' && value !== 0) {
    result = value;
  } else {
    result = defaultValues.numberOccurrences;
  }

  if ($$debugging)
    console.log('§> getNumberOccurrences', { configuration, value, result });

  return result;
};

/**
 * Gets the list of symbols from the configuration file
 * or from the default values.
 *
 * @returns {string[]} A list of special chars
 */
const getSymbols = (): string[] => {
  let result = [];
  const configuration = vscode.workspace.getConfiguration(configKey);

  let values = configuration.get('symbols');
  if (typeof values == 'string' && values.length !== 0) {
    result = values.split('');
  } else {
    result = defaultValues.symbols.split('');
  }

  if ($$debugging)
    console.log('§> getSymbols', { configuration, values, result });

  return result;
};

/**
 * Gets the amount of symbols occurrences from the configuration
 * file or from the default values.
 *
 * @returns {number}
 */
const getSymbolOccurrences = (): number => {
  let result = 0;
  const configuration = vscode.workspace.getConfiguration(configKey);

  let value = configuration.get('symbolOccurrences');
  if (typeof value == 'number' && value !== 0) {
    result = value;
  } else {
    result = defaultValues.symbolOccurrences;
  }

  if ($$debugging)
    console.log('§> getSymbolOccurrences', { configuration, value, result });

  return result;
};

/**
 * Takes an array of elements of strings and returns
 * an array with the same elements, but in random order.
 * Uses the Fisher-Yates Sorting Algorithm applied three
 * times.
 *
 * @param {string[]} ar An array of strings
 * @returns {string[]} A shuffled array of string
 */
const shuffleArray = (ar: string[]): string[] => {
  let result = [...ar];
  for (let k = 1; k <= 3; k++) {
    for (let i = result.length - 1; i > 0; i--) {
      const j = randomInt(0, i);
      [result[i], result[j]] = [result[j], result[i]];
    }
  }

  if ($$debugging) console.log('§> shuffleArray', { ar, result });

  return result;
};

/**
 * Takes a string and checks that it contains at
 * least `occurrences` characters among those
 * contained in a given array
 *
 * @param {string} str the password to check
 * @param {number} occurrences How many chars in `str` are contained in `strArr`
 * @param {string[]} strArr the array used to check the password
 * @returns {boolean}
 */
const checkPassword = (
  str: string,
  occurrences: number,
  strArr: string[]
): boolean => {
  let result = false;
  let stack = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (strArr.includes(char)) {
      stack += char;
    }
  }

  if (stack.length >= occurrences) result = true;

  if ($$debugging)
    console.log('§> checkPassword', {
      str,
      occurrences,
      strArr,
      stack,
      result,
    });

  return result;
};

/**
 * Takes a password (a string) and checks that it contains at least
 * one uppercase character, one lowercase character, one number and
 * one special character.
 *
 * @param {string} str the password to check
 * @returns {boolean} true if the password is valid, false otherwise.
 */
const isValidPassword = (str: string): boolean => {
  let result = true;

  if (!checkPassword(str, getUpperCasesOccurrences(), getUpperCases()))
    result = false;
  if (!checkPassword(str, getLowerCasesOccurrences(), getLowerCases()))
    result = false;
  if (!checkPassword(str, getNumberOccurrences(), getNumbers())) result = false;
  if (!checkPassword(str, getSymbolOccurrences(), getSymbols())) result = false;

  if ($$debugging) console.log('§> isValidPassword', { str, result });

  return result;
};

/**
 * Constructs the character array to use to construct the password.
 * The array consists of all uppercase and lowercase characters,
 * numbers and symbols mixed together in various ways.
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

  if ($$debugging)
    console.log('§> getPool', { uCases, lCases, numbers, symbols, result });

  return result;
};

/**
 * Creates a password of _length_ length.
 *
 * @param length Length of the password
 * @returns {string} the password
 */
const getPwd = (length: number): string => {
  let result = '';
  const pool = getPool();

  do {
    result = '';
    for (let i = 1; i <= length; i++) {
      const index = randomInt(0, pool.length - 1);
      result += pool[index];
    }
  } while (!isValidPassword(result));

  result = shuffleArray(result.split('')).join('');

  if ($$debugging) console.log('§> getPwd', { length, pool, result });

  return result;
};

/**
 * Produces an array containing passwords of length equal
 * to _length_ characters. the array has `getPwdListLength`
 * elements. It is the method called by the extension
 * to produce and print password lists.
 *
 * @param length Length of the passwords
 * @returns {string[]} An array of strings
 */
export const getPwdList = (length: number): string[] => {
  let result = [];
  const spins = getPwdListLength();

  for (let i = 1; i <= spins; i++) {
    result.push(getPwd(length));
  }

  if ($$debugging) console.log('§> getPwdList', { length, spins, result });

  return result;
};

// End of file generator.ts
