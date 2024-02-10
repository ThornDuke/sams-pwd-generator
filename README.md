# Sam's Passwords Generator

![GitHub License](https://img.shields.io/github/license/ThornDuke/sams-pwd-generator?style=plastic&logo=gnu)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/thornduke.sams-pw-gen.svg?style=plastic&logo=visualstudiocode)
![Static Badge](https://img.shields.io/badge/strong-security?style=plastic&logo=keepassxc&logoColor=white&label=security&labelColor=black&color=red)
![Static Badge](https://img.shields.io/badge/enabled-crypto?style=plastic&logo=alienware&logoColor=white&label=crypto&labelColor=black&color=green)

<!--
![Visual Studio Marketplace Rating Stars](https://img.shields.io/visual-studio-marketplace/stars/thornduke.sams-pw-gen.svg?style=plastic)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/thornduke.sams-pw-gen.svg?style=plastic)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/thornduke.sams-pw-gen.svg?style=plastic)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/thornduke.sams-pw-gen.svg?style=plastic)
-->

<img
  src="https://github.com/ThornDuke/sams-pwd-generator/raw/master/resources/demo01.gif"
  alt="demo"
  width="650"
  />

## Table of content

- [Features](#features)
- [Installation](#installation)
- [How to use](#how-to-use)
  - [1. Fixed-length passwords](#1-fixed-length-passwords)
  - [2. Arbitrary-length passwords](#2-arbitrary-length-passwords)
  - [3. _On the fly_ passwords](#3-on-the-fly-passwords)
- [Managing settings](#managing-settings)
  - [Extension settings page](#extension-settings-page)
  - [VSCode configuration file](#vscode-configuration-file)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Disclaimer](#disclaimer)

## Features

This extension allows you to easily create complex and solid passwords of
different lengths, from 8 to 16 characters and more. Passwords can be created
with a specific command or with the context menu. All passwords have at least
one uppercase character, one lowercase character, one number, and one special
character.

You can configure the character set that will be used to create passwords, the
number of passwords produced with every 'spin', and the minimum number of
uppercase characters, lowercase characters, digits or symbols that must be
contained in each password.

The randomization engine is based on the `crypto` library, which is
[considered cryptographically secure](https://nodejs.org/api/crypto.html#crypto:~:text=js%20crypto%20constants-,Crypto,-%23).

Thanks to the use of the `crypto` library and an effective shuffling algorithm,
the passwords produced are aesthetically beautiful and expressive of a high
level of entropy.

[Back to [table of content](#table-of-content)]

## Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Sam's Passwords Generator`
3. Click `Install` to install it.

[Back to [table of content](#table-of-content)]

## How to use

### 1. Fixed-length passwords

At any time, you can press `⌘ + ⇧ + P` on Mac or `Control + ⇧ + P` on Windows /
Linux and start typing `Password`.

You can choose from the following commands:

- `Password 8 char long`
- `Password 9 char long`
- `Password 10 char long`
- `Password 11 char long`
- `Password 12 char long`
- `Password 13 char long`
- `Password 14 char long`
- `Password 15 char long`
- `Password 16 char long`

When you choose one of these commands the `Output` tab in VSCode opens showing a
list of passwords with the chosen length. Choose one, copy and paste it into the
editor where you need it.

[Back to [table of content](#table-of-content)]

### 2. Arbitrary-length passwords

You also have another command available:

- `Password of any length`

By selecting it you can generate a list of passwords of any length between 8 and
64 characters by typing a number in the vscode input box. The number of
passwords produced can be changed in the extension settings as explained below.

<img
  src="https://github.com/ThornDuke/sams-pwd-generator/raw/master/resources/demo02.gif"
  alt="demo"
  width="650"
  />

[Back to [table of content](#table-of-content)]

### 3. _On the fly_ passwords

If you don't have time to waste and all you want is ONE password, the extension
provides a context menu command: `Generate password at cursor`, with which a
password is produced and inserted at the point where the cursor is located. If
text is selected, the entered password replaces the selected text. If there are
many cursors, the extension create a password for each of them.

You can change the length of the password produced with this option by acting on
the `Length at cursor` configuration parameter as explained in the next
paragraph.

In the same way you can remove the command from the context menu by changing the
`Show Context Menu Command` parameter.

<img
  src="https://github.com/ThornDuke/sams-pwd-generator/raw/master/resources/demo03.gif"
  alt="demo"
  width="650"
  />

[Back to [table of content](#table-of-content)]

## Managing settings

### Extension settings page

Click on `Manage / Extension settings` and change the values ​​according to your
preferences.

The extension can be customised as follows (default values in brackets):

**Sampwdgenerator: Passwords** (`10`)\
Amount of password produced each time the command is called.

**Sampwdgenerator: Uppercases** (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)\
A string containing the uppercase characters used to construct passwords.

**Sampwdgenerator: Uppercase Occurrences** (`1`)\
Minimum amount of uppercase characters contained in each password.

**Sampwdgenerator: Lowercases** (`abcdefghijklmnopqrstuvwxyz`)\
A string containing the lowercase characters used to construct passwords.

**Sampwdgenerator: Lowercase Occurrences** (`1`)\
Minimum amount of lowercase characters contained in each password.

**Sampwdgenerator: Numbers** (`0123456789`)\
A string containing the numbers used to construct passwords.

**Sampwdgenerator: Number Occurrences** (`1`)\
Minimum amount of digits contained in each password.

**Sampwdgenerator: Symbols** (`£$%&*§#@`)\
A string containing the symbols used to construct passwords.

**Sampwdgenerator: Symbol Occurrences** (`1`)\
Minimum amount of special characters contained in each password.

**Sampwdgenerator: Length At Cursor** (`12`)\
Length of the password generated at the cursor position.

**Sampwdgenerator: Show Context Menu Command** (`true`)\
Show the command `Generate Password At Cursor` in the context menu.

[Back to [table of content](#table-of-content)]

### VSCode configuration file

You can change the values ​​directly in the configuration file:

1. Open the command palette (either with `F1` or `Ctrl+Shift+P` or
   `Shift+Command+P`)
2. Type `open settings`
3. You are presented with a few options, choose `Open User Settings (JSON)`
4. Add or modify the following lines.

```json
{
  "sampwdgenerator.uppercases": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "sampwdgenerator.uppercaseOccurrences": 1,
  "sampwdgenerator.lowercases": "abcdefghijklmnopqrstuvwxyz",
  "sampwdgenerator.lowercaseOccurrences": 1,
  "sampwdgenerator.numbers": "0123456789",
  "sampwdgenerator.numberOccurrences": 1,
  "sampwdgenerator.symbols": "£$%&*§#@",
  "sampwdgenerator.symbolOccurrences": 1,
  "sampwdgenerator.lengthAtCursor": 12,
  "sampwdgenerator.showContextMenuCommand": true
}
```

[Back to [table of content](#table-of-content)]

## Contributing

Contributions to this project are welcomed!

Whether you have

- questions, concerns, or suggestions for improving this extension
- want to report a bug
- submit a fix
- propose new features

please don't hesitate to reach out to us on GitHub and
[open an issue](https://github.com/ThornDuke/sams-pwd-generator/issues).

[Back to [table of content](#table-of-content)]

## Acknowledgements

The icon is created by [Freepik - Flaticon](https://www.flaticon.com)

[Back to [table of content](#table-of-content)]

## Disclaimer

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see <https://www.gnu.org/licenses/>.

[Back to [table of content](#table-of-content)]
