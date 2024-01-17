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
const createShowPwds = (length: number) => {
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
  let disposable8 = vscode.commands.registerCommand('sams-pw-gen.getpwd8', () =>
    createShowPwds(8)
  );
  context.subscriptions.push(disposable8);

  let disposable9 = vscode.commands.registerCommand('sams-pw-gen.getpwd9', () =>
    createShowPwds(9)
  );
  context.subscriptions.push(disposable9);

  let disposable10 = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd10',
    () => createShowPwds(10)
  );
  context.subscriptions.push(disposable10);

  let disposable11 = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd11',
    () => createShowPwds(11)
  );
  context.subscriptions.push(disposable11);

  let disposable12 = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd12',
    () => createShowPwds(12)
  );
  context.subscriptions.push(disposable12);

  let disposable13 = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd13',
    () => createShowPwds(13)
  );
  context.subscriptions.push(disposable13);

  let disposable14 = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd14',
    () => createShowPwds(15)
  );
  context.subscriptions.push(disposable14);

  let disposable15 = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd15',
    () => createShowPwds(15)
  );
  context.subscriptions.push(disposable15);

  let disposable16 = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd16',
    () => createShowPwds(16)
  );
  context.subscriptions.push(disposable16);
}

// This method is called when your extension is deactivated
export function deactivate() {}

// End of file extension.ts
