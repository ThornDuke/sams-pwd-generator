/**
 * extension.ts
 *
 * Contains methods that link parameters set in `package.json`
 * with methods exposed by `generator.ts`, command definitions,
 * and methods for rendering passwords.
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
 * Thorn Duke
 */

/**
 * The module 'vscode' contains the VS Code extensibility API
 * Import the module and reference it with the alias vscode
 * in your code below
 */
import * as vscode from 'vscode';

/**
 * The engine of the extension
 */
import { getPwdList, getCursorPwd } from './generator';
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
 * Creates a password and prints it at the cursor location,
 * possibly replacing the selected text. If there are many
 * cursors, create a password for each of them.
 *
 * @param {vscode.TextEditor} editor
 */
const generatePwdAtCursor = (editor: vscode.TextEditor | undefined) => {
  editor?.edit((editBuilder) => {
    for (const selection of editor.selections) {
      editBuilder.replace(selection, getCursorPwd());
    }
  });
};

/**
 * Ask a user for a number and creates a list of
 * password with length equal to that number.
 */
const createPwdFreeLength = async () => {
  const desiredLength = await vscode.window.showInputBox({
    placeHolder: 'Password length',
    prompt: 'Length of the password (only integer numbers from 8 to 64)',
    title: 'Generate a list of passwords',
    validateInput: (text) => {
      const test =
        !isNaN(parseInt(text)) &&
        Number.isInteger(Number(text)) &&
        Number(text) >= 8 &&
        Number(text) <= 64;
      return test ? null : 'Incorrect input';
    },
  });

  if (desiredLength !== '' && desiredLength !== undefined) {
    createAndShowPwds(Number(desiredLength));
  }
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
  // Other commands
  context.subscriptions.push(
    vscode.commands.registerCommand('sams-pw-gen.generateAtCursor', () => {
      const editor = vscode.window.activeTextEditor;
      generatePwdAtCursor(editor);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('sams-pw-gen.askUser', () => {
      createPwdFreeLength();
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}

// End of file extension.ts
