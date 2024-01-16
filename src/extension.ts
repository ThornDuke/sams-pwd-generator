// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// The engine of the extension
import { getPwdList } from './generator';

const pwdChan = vscode.window.createOutputChannel('PwdGenerator');

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

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposableA = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd8',
    () => {
      let lines = getPwdList(8).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableA);

  let disposableB = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd9',
    () => {
      let lines = getPwdList(9).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableB);

  let disposableC = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd10',
    () => {
      let lines = getPwdList(10).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableC);

  let disposableD = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd11',
    () => {
      let lines = getPwdList(11).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableD);

  let disposableE = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd12',
    () => {
      let lines = getPwdList(12).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableE);

  let disposableF = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd13',
    () => {
      let lines = getPwdList(13).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableF);

  let disposableG = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd14',
    () => {
      let lines = getPwdList(14).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableG);

  let disposableH = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd15',
    () => {
      let lines = getPwdList(15).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableH);

  let disposableJ = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd16',
    () => {
      let lines = getPwdList(16).map((line, index) =>
        formatLine(index + 1, line)
      );
      pwdChan.append(lines.join('\n'));
      pwdChan.append('\n\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableJ);
}

// This method is called when your extension is deactivated
export function deactivate() {}
