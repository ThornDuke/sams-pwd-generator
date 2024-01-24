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
import extConfig from '../package.json';

/**
 * The vscode panel `output` channel where passwords will be displayed
 */
const pwdChannel = vscode.window.createOutputChannel('PwdGenerator');

/**
 * It is used to construct a row of a numbered list.
 * It takes a number `num` and a string `str`, calculates
 * the correct padding based on the number `maxNum` which
 * represents the highest number that can be assumed by
 * `num`, and returns a correctly formatted string.
 *
 * @param {number} num
 * @param {number} maxNum
 * @param {string} str
 * @returns {string}
 */
export const formatLine = (
  num: number,
  maxNum: number,
  str: string
): string => {
  const padding = String(maxNum).length + 2;
  let start: string = String(num) + '.';
  start = start.padEnd(padding, ' ');
  return `${start} ${str}`;
};

/**
 * Creates passwords _length_ characters long, formats
 * them and show them in the vscode `output` panel
 *
 * @param length The length of the passwords
 */
const createAndShowPwds = (length: number) => {
  const lines = getPwdList(length).map((line, index, currArray) =>
    formatLine(index + 1, currArray.length, line)
  );

  const logoLine = `SPG ${extConfig.version}`;
  const startLine = `Lines: ${lines.length}\nLength: ${length}`;
  const endLine = 'Processing finished';

  pwdChannel.append(
    `${logoLine}\n\n${startLine}\n\n${lines.join('\n')}\n\n${endLine}\n\n\n`
  );
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
