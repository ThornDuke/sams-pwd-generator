import * as assert from 'assert';
import * as vscode from 'vscode';
import * as extension from '../extension';

suite('Sams Password Generator: extension.ts', () => {
  test('Testing formatLine(): string', () => {
    assert.equal(
      typeof extension.formatLine(5, 51, 'Its just a string'),
      'string',
      'Has to return a string'
    );
  });
});
