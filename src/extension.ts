/**
 * The module 'vscode' contains the VS Code extensibility API
 * Import the module and reference it with the alias vscode
 * in your code below
 */
import * as vscode from 'vscode';

/**
 * The engine of the extension
 */
import { getPwdList } from './generator';

/**
 * The vscode panel `output` channel where passwords will be displayed
 */
const pwdChannel = vscode.window.createOutputChannel('PwdGenerator');

/**
 * To construct a line of a numbered list. It takes a number and
 * a string and returns another string consisting of the number
 * with a two-digit padding followed by the string.
 *
 * @param {number} num
 * @param {string} str
 * @returns {string}
 */
const formatLine = (num: number, str: string): string => {
  let start: string = String(num) + '.';
  start = start.padEnd(3, ' ');
  return `${start} ${str}`;
};

/**
 * Creates passwords _length_ characters long, formats
 * them and show them in the vscode `output` panel
 *
 * @param length The length of the passwords
 */
const createAndShowPwds = (length: number) => {
  let lines = getPwdList(length).map((line, index) =>
    formatLine(index + 1, line)
  );
  pwdChannel.append(`${lines.join('\n')}\n\n`);
  pwdChannel.show();
};

/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 */
export function activate(context: vscode.ExtensionContext) {
  // The string passed to registerCommand must match
  // one of the commands listed in `package.json` under
  // the `contributes.commands` key
  for (let i = 8; i <= 16; i++) {
    context.subscriptions.push(
      vscode.commands.registerCommand(`sams-pw-gen.getpwd${i}`, () => {
        createAndShowPwds(i);
      })
    );
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}

// End of file extension.ts
