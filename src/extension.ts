// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// The engine of the extension
import {
  getPwd8,
  getPwd9,
  getPwd10,
  getPwd11,
  getPwd12,
  getPwd13,
  getPwd14,
  getPwd15,
  getPwd16,
} from './generator';

const pwdChan = vscode.window.createOutputChannel('PwdGenerator');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposableA = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd8',
    () => {
      pwdChan.append(getPwd8().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableA);

  let disposableB = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd9',
    () => {
      pwdChan.append(getPwd9().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableB);

  let disposableC = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd10',
    () => {
      pwdChan.append(getPwd10().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableC);

  let disposableD = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd11',
    () => {
      pwdChan.append(getPwd11().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableD);

  let disposableE = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd12',
    () => {
      pwdChan.append(getPwd12().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableE);

  let disposableF = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd13',
    () => {
      pwdChan.append(getPwd13().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableF);

  let disposableG = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd14',
    () => {
      pwdChan.append(getPwd14().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableG);

  let disposableH = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd15',
    () => {
      pwdChan.append(getPwd15().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableH);

  let disposableJ = vscode.commands.registerCommand(
    'sams-pw-gen.getpwd16',
    () => {
      pwdChan.append(getPwd16().join('\n'));
      pwdChan.append('\n================\n');
      pwdChan.show();
    }
  );
  context.subscriptions.push(disposableJ);
}

// This method is called when your extension is deactivated
export function deactivate() {}
