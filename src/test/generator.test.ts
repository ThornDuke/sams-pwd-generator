import * as assert from 'assert';
import * as vscode from 'vscode';
import * as generator from '../generator';

const testStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const testArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const testPwd = 'T3fcf%@iIZc6s&';

const hasOnlyStrings = (arr: string[]): boolean => {
  let result = true;
  for (let item in arr) {
    if (typeof item !== 'string') {
      result = false;
      break;
    }
  }
  return result;
};

const isSameLength = (arrA: Array<string>, arrB: Array<string>): boolean => {
  let result = arrA.length === arrB.length;
  return result;
};

const isDifferentOrder = (arrA: string[], arrB: string[]): boolean => {
  let result = false;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      result = true;
      break;
    }
  }
  return result;
};

const areStringsSameLength = (arr: string[], length: number): boolean => {
  let result = true;
  for (let item in arr) {
    if (item.length !== length) {
      result = false;
      break;
    }
  }
  return result;
};

suite('Sams Password Generator: generator.ts', () => {
  test('Testing randomInt(): type number', () => {
    assert.equal(
      typeof generator.randomInt(1, 5),
      'number',
      'Has to return a number'
    );
    assert.equal(
      generator.randomInt(1, 5) >= 1,
      true,
      'The result has to be greater or equal to 1'
    );
    assert.equal(
      generator.randomInt(1, 5) <= 5,
      true,
      'The result has to be lesser or equal to 5'
    );
  });

  test('Testing getPwdListLength(): number > 0', () => {
    assert.equal(
      typeof generator.getPwdListLength(),
      'number',
      'Has to return a number'
    );

    assert.equal(
      generator.getPwdListLength() > 0,
      true,
      'Has to return a number greater than 0'
    );
  });

  test('Testing getUpperCases(): array of strings', () => {
    assert.equal(
      typeof generator.getUpperCases(),
      'object',
      'Has to return an array'
    );

    assert.equal(
      hasOnlyStrings(generator.getUpperCases()),
      true,
      'The array has to contain only strings'
    );
  });

  test('Testing getUpperCasesOccurrences(): 1 <= number <= 2', () => {
    assert.equal(
      typeof generator.getUpperCasesOccurrences(),
      'number',
      'Has to return a number'
    );

    assert.equal(
      generator.getUpperCasesOccurrences() >= 1,
      true,
      'Has to return a number >= 1'
    );

    assert.equal(
      generator.getUpperCasesOccurrences() <= 2,
      true,
      'Has to return a number <= 2'
    );
  });

  test('Testing getLowerCases(): array of strings', () => {
    assert.equal(
      typeof generator.getLowerCases(),
      'object',
      'Has to return an array'
    );

    assert.equal(
      hasOnlyStrings(generator.getLowerCases()),
      true,
      'The array has to contain only strings'
    );
  });

  test('Testing getLowerCasesOccurrences(): 1 <= number <= 2', () => {
    assert.equal(
      typeof generator.getLowerCasesOccurrences(),
      'number',
      'Has to return a number'
    );

    assert.equal(
      generator.getLowerCasesOccurrences() >= 1,
      true,
      'Has to return a number >= 1'
    );

    assert.equal(
      generator.getLowerCasesOccurrences() <= 2,
      true,
      'Has to return a number <= 2'
    );
  });

  test('Testing getNumbers(): array of strings', () => {
    assert.equal(
      typeof generator.getNumbers(),
      'object',
      'Has to return an array'
    );

    assert.equal(
      hasOnlyStrings(generator.getNumbers()),
      true,
      'The array contains only strings'
    );
  });

  test('Testing getNumbersOccurrences(): 1 <= number <= 2', () => {
    assert.equal(
      typeof generator.getNumberOccurrences(),
      'number',
      'Has to return a number'
    );

    assert.equal(
      generator.getNumberOccurrences() >= 1,
      true,
      'Has to return a number >= 1'
    );

    assert.equal(
      generator.getNumberOccurrences() <= 2,
      true,
      'Has to return a number <= 2'
    );
  });

  test('Testing getSymbols(): array of strings', () => {
    assert.equal(
      typeof generator.getSymbols(),
      'object',
      'Has to return an array'
    );

    assert.equal(
      hasOnlyStrings(generator.getSymbols()),
      true,
      'The array has to contain only strings'
    );
  });

  test('Testing getSymbolOccurrences(): 1 <= number <= 2', () => {
    assert.equal(
      typeof generator.getSymbolOccurrences(),
      'number',
      'Has to return a number'
    );

    assert.equal(
      generator.getSymbolOccurrences() >= 1,
      true,
      'Has to return a number >= 1'
    );

    assert.equal(
      generator.getSymbolOccurrences() <= 2,
      true,
      'Has to return a number <= 2'
    );
  });

  test('Testing shuffleArray(arr: array)', () => {
    assert.equal(
      typeof generator.shuffleArray(testArr),
      'object',
      'Has to return an array'
    );

    assert.equal(
      hasOnlyStrings(generator.shuffleArray(testArr)),
      true,
      'The array has to contain only strings'
    );

    assert.equal(
      isSameLength(testArr, generator.shuffleArray(testArr)),
      true,
      'Has to return an array of the same length of the input'
    );

    assert.equal(
      isDifferentOrder(testArr, generator.shuffleArray(testArr)),
      true,
      'It must return an array whose items are in a different order than the input array'
    );
  });

  test('Testing checkPassword(): boolean', () => {
    assert.equal(
      typeof generator.checkPassword(testStr, 1, testArr),
      'boolean',
      'Has to return a boolean value'
    );
  });

  test('Testing isValidPassword(): boolean', () => {
    assert.equal(
      typeof generator.isValidPassword(testPwd),
      'boolean',
      'Has to return a boolean value'
    );
  });

  test('Testing getPool(): string[]', () => {
    assert.equal(
      typeof generator.getPool(),
      'object',
      'Has to return an array'
    );

    assert.equal(
      hasOnlyStrings(generator.getPool()),
      true,
      'The array has to contain only strings'
    );
  });

  test('Testing getPwd(): string', () => {
    assert.equal(
      typeof generator.getPwd(8),
      'string',
      'Has to return a string'
    );

    assert.equal(
      generator.getPwd(8).length,
      8,
      'Has to return a string 8 chars long'
    );
  });

  test('Testing getPwdList(): string[]', () => {
    const result = generator.getPwdList(8);

    // is an array
    assert.equal(typeof result, 'object', 'Has to return an array');

    // has only strings
    assert.equal(
      hasOnlyStrings(result),
      true,
      'The array has to contain only strings'
    );
  });
});
