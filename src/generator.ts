/**
 * generator.ts
 *
 * It is the engine that creates passwords and
 * makes them available to the extension.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * First edit: 2024-01-15
 * Thorne Duke
 */

import crypto from 'node:crypto';
import {
  $$debugging,
  $$logErrors,
  getConfigValueAtKey,
  configKey,
} from './globals';
import packageData from '../package.json';

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
  lengthAtCursor: 12,
};

/**
 * Produces a random integer between _min_ (inclusive)
 * and _max_ (inclusive), using the `crypto` library
 *
 * @param {number} min The lower limit
 * @param {number} max The upper limit
 * @returns {number} a random integer number
 */
export const randomInt = (min: number, max: number): number => {
  const result = crypto.randomInt(min, max + 1);

  if ($$debugging) {
    console.log('§> randomInt', { result });
  }

  return result;
};

/**
 * Gets the amount of password produced each time the command is called.
 *
 * @returns {number} A number greater `minimum` configuration default
 * and lesser than `maximum` configuration default.
 */
export const getPwdListLength = (): number => {
  let result = 0;
  const key = 'passwords';
  const configValue = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minimum;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maximum;

  if (typeof configValue === 'number' && configValue !== 0) {
    result = configValue;
  } else {
    result = defaultValues.passwords;
  }

  if (result < defaultMin) {
    result = defaultMin;
  } else if (result > defaultMax) {
    result = defaultMax;
  }

  if ($$debugging) {
    console.log('§> getPwdListLength', {
      key,
      configValue,
      defaultMin,
      defaultMax,
      result,
    });
  }

  return result;
};

/**
 * Gets the list of uppercase letters from the configuration
 * file or from the default values.
 *
 * @returns {string[]} A list of uppercase chars
 */
export const getUpperCases = (): string[] => {
  let result = [];
  const key = 'uppercases';
  const configValues = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minLength;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maxLength;

  if (typeof configValues === 'string' && configValues.length !== 0) {
    result = configValues.split('');
  } else {
    result = defaultValues.uppercases.split('');
  }

  if (result.length < defaultMin) {
    result.push('A');
  } else if (result.length > defaultMax) {
    result = result.slice(0, defaultMax);
  }

  if ($$debugging) {
    console.log('§> getUpperCases', {
      key,
      configValues,
      defaultMin,
      defaultMax,
      result,
    });
  }

  return result;
};

/**
 * Gets the amount of uppercase letters occurrences from the configuration
 * file or from the default values.
 *
 * @returns {number}
 */
export const getUpperCasesOccurrences = (): number => {
  let result = 0;
  const key = 'uppercaseOccurrences';
  const configValue = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minimum;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maximum;

  if (typeof configValue === 'number' && configValue !== 0) {
    result = configValue;
  } else {
    result = defaultValues.uppercaseOccurrences;
  }

  if (result > defaultMax) {
    result = defaultMax;
  } else if (result < defaultMin) {
    result = defaultMin;
  }

  if ($$debugging) {
    console.log('§> getUpperCasesOccurrences', {
      key,
      configValue,
      defaultMin,
      defaultMax,
      result,
    });
  }

  return result;
};

/**
 * Gets the list of lowercase letters from the configuration file
 * or from the default values.
 *
 * @returns {string[]} A list of lowercase chars
 */
export const getLowerCases = (): string[] => {
  let result = [];
  const key = 'lowercases';
  const configValues = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minLength;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maxLength;

  if (typeof configValues === 'string' && configValues.length !== 0) {
    result = configValues.split('');
  } else {
    result = defaultValues.lowercases.split('');
  }

  if (result.length < defaultMin) {
    result.push('a');
  } else if (result.length > defaultMax) {
    result = result.slice(0, defaultMax);
  }

  if ($$debugging) {
    console.log('§> getLowerCases', { configValues, result });
  }

  return result;
};

/**
 * Gets the amount of lowercase letters occurrences from the configuration
 * file or from the default values.
 *
 * @returns {number}
 */
export const getLowerCasesOccurrences = (): number => {
  let result = 0;
  const key = 'lowercaseOccurrences';
  const configValue = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minimum;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maximum;

  if (typeof configValue === 'number' && configValue !== 0) {
    result = configValue;
  } else {
    result = defaultValues.lowercaseOccurrences;
  }

  if (result > defaultMax) {
    result = defaultMax;
  } else if (result < defaultMin) {
    result = defaultMin;
  }

  if ($$debugging) {
    console.log('§> getLowerCasesOccurrences', {
      key,
      configValue,
      defaultMin,
      defaultMax,
      result,
    });
  }

  return result;
};

/**
 * Gets the list of numbers from the configuration file
 * or from the default values.
 *
 * @returns {string[]} A list of numbers
 */
export const getNumbers = (): string[] => {
  let result = [];
  const key = 'numbers';
  const configValues = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minLength;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maxLength;

  if (typeof configValues === 'string' && configValues.length !== 0) {
    result = configValues.split('');
  } else {
    result = defaultValues.numbers.split('');
  }

  if (result.length < defaultMin) {
    result.push('1');
  } else if (result.length > defaultMax) {
    result = result.slice(0, defaultMax);
  }

  if ($$debugging) {
    console.log('§> getNumbers', {
      key,
      configValues,
      defaultMin,
      defaultMax,
      result,
    });
  }

  return result;
};

/**
 * Gets the amount of digit occurrences from the configuration
 * file or from the default values.
 *
 * @returns {number}
 */
export const getNumberOccurrences = (): number => {
  let result = 0;
  const key = 'numberOccurrences';
  const configValue = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minimum;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maximum;

  if (typeof configValue === 'number' && configValue !== 0) {
    result = configValue;
  } else {
    result = defaultValues.numberOccurrences;
  }

  if (result > defaultMax) {
    result = defaultMax;
  } else if (result < defaultMin) {
    result = defaultMin;
  }

  if ($$debugging) {
    console.log('§> getNumberOccurrences', {
      key,
      configValue,
      defaultMin,
      defaultMax,
      result,
    });
  }

  return result;
};

/**
 * Gets the list of symbols from the configuration file
 * or from the default values.
 *
 * @returns {string[]} A list of special chars
 */
export const getSymbols = (): string[] => {
  let result = [];
  const key = 'symbols';
  const configValues = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minLength;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maxLength;

  if (typeof configValues === 'string' && configValues.length !== 0) {
    result = configValues.split('');
  } else {
    result = defaultValues.symbols.split('');
  }

  if (result.length < defaultMin) {
    result.push('$');
  } else if (result.length > defaultMax) {
    result = result.slice(0, defaultMax);
  }

  if ($$debugging) {
    console.log('§> getSymbols', {
      key,
      configValues,
      defaultMin,
      defaultMax,
      result,
    });
  }

  return result;
};

/**
 * Gets the amount of symbols occurrences from the configuration
 * file or from the default values.
 *
 * @returns {number}
 */
export const getSymbolOccurrences = (): number => {
  let result = 0;
  const key = 'symbolOccurrences';
  const configValue = getConfigValueAtKey(key);
  const defaultMin =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .minimum;
  const defaultMax =
    packageData.contributes.configuration[0].properties[`${configKey}.${key}`]
      .maximum;

  if (typeof configValue === 'number' && configValue !== 0) {
    result = configValue;
  } else {
    result = defaultValues.symbolOccurrences;
  }

  if (result > defaultMax) {
    result = defaultMax;
  } else if (result < defaultMin) {
    result = defaultMin;
  }

  if ($$debugging) {
    console.log('§> getSymbolOccurrences', {
      key,
      configValue,
      defaultMin,
      defaultMax,
      result,
    });
  }

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
export const shuffleArray = (ar: string[]): string[] => {
  let result = [...ar];
  for (let k = 1; k <= 3; k++) {
    for (let i = result.length - 1; i > 0; i--) {
      const j = randomInt(0, i);
      [result[i], result[j]] = [result[j], result[i]];
    }
  }

  if ($$debugging) {
    console.log('§> shuffleArray', { ar, result });
  }

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
export const checkPassword = (
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

  if (stack.length >= occurrences) {
    result = true;
  }

  if ($$debugging) {
    console.log('§> checkPassword', {
      str,
      occurrences,
      strArr,
      stack,
      result,
    });
  }

  return result;
};

/**
 * Takes a password (a string) and checks that it contains
 * at least `occurrences` uppercase character, `occurrences`
 * lowercase character, `occurrences` number and
 * `occurrences` special character.
 *
 * @param {string} str the password to check
 * @returns {boolean} true if the password is valid, false otherwise.
 */
export const isValidPassword = (str: string): boolean => {
  let result = true;

  if (!checkPassword(str, getUpperCasesOccurrences(), getUpperCases())) {
    result = false;
  }
  if (!checkPassword(str, getLowerCasesOccurrences(), getLowerCases())) {
    result = false;
  }
  if (!checkPassword(str, getNumberOccurrences(), getNumbers())) {
    result = false;
  }
  if (!checkPassword(str, getSymbolOccurrences(), getSymbols())) {
    result = false;
  }

  if ($$debugging) {
    console.log('§> isValidPassword', { str, result });
  }

  return result;
};

/**
 * Constructs the character array to use to construct the password.
 * The array consists of all uppercase and lowercase characters,
 * numbers and symbols mixed together in various ways.
 *
 * @returns {string[]}
 */
export const getPool = (): string[] => {
  const uCases: string[] = shuffleArray(getUpperCases());
  const lCases: string[] = shuffleArray(getLowerCases());
  const numbers: string[] = shuffleArray(getNumbers());
  const symbols: string[] = shuffleArray(getSymbols());

  let result: string[] = [];
  result = shuffleArray(result.concat(uCases, lCases, numbers, symbols));

  if ($$debugging) {
    console.log('§> getPool', { uCases, lCases, numbers, symbols, result });
  }

  return result;
};

/**
 * Creates a password of _length_ length.
 *
 * @param length Length of the password
 * @returns {string} the password
 */
export const getPwd = (length: number): string => {
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

  if ($$debugging) {
    console.log('§> getPwd', { length, pool, result });
  }

  return result;
};

/**
 * Create a password whose length is taken from
 * the `lengthAtCursor` config value.
 *
 * @returns {string} A password
 */
export const getCursorPwd = (): string => {
  let result = '';
  let length = 0;
  const configValue = getConfigValueAtKey('lengthAtCursor');

  if (typeof configValue === 'number' && configValue !== 0) {
    length = configValue;
  } else {
    length = defaultValues.lengthAtCursor;
  }

  result = getPwd(length);

  if ($$debugging) {
    console.log('§> getCursorPwd', { configValue, length, result });
  }

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

  if ($$debugging) {
    console.log('§> getPwdList', { length, spins, result });
  }

  return result;
};

// End of file generator.ts
