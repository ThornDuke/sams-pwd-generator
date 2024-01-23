import * as assert from 'assert';
import * as vscode from 'vscode';
import * as generator from '../generator';

suite('Sams Password Generator', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Testing randomInt()', () => {
    assert.equal(
      typeof generator.randomInt(1, 5),
      'number',
      'Returns a number'
    );
    assert.equal(
      generator.randomInt(1, 5) >= 1,
      true,
      'the result has to be greater or equal to 1'
    );
    assert.equal(
      generator.randomInt(1, 5) <= 5,
      true,
      'the result has to be lesser or equal to 5'
    );
  });

  test('Testing getPwdListLength()', {
    ///
  });
});
