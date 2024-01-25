# <!-- <img src="icon.png" alt="package icon" width="50px"/> --> Sam's Passwords Generator

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

<img src="https://github.com/ThornDuke/sams-pwd-generator/raw/master/demo.gif" alt="demo" width="650" />

## Features

This extension allows you to easily create strorng passwords of different
lengths, from 8 to 16 characters. Passwords all have at least one uppercase
character, one lowercase character, one number, and one special character.

You can configure the character set that will be used to create passwords, the
number of passwords produced with every 'spin', and the minimum number of
uppercase characters, lowercase characters, digits or symbols that must be
contained in each password.

The randomization engine is based on the `crypto` library, which is
[considered cryptographically secure](https://nodejs.org/api/crypto.html#crypto:~:text=js%20crypto%20constants-,Crypto,-%23).

## Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Sam's Passwords Generator`
3. Click `Install` to install it.

## How to use

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

## Managing settings

Click on `Manage / Extension settings` and change the values ​​according to your
preferences.

Alternatively, you can change the values ​​directly in the configuration file:

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
  "sampwdgenerator.symbolOccurrences": 1
}
```

<!--
Whether you changed the parameters manually in `settings.json` or in the
plugin's `Settings` page, **you must restart VSCode or reload the window** for
the changes to take effect:

1. `F1` or `Ctrl+Shift+P` or `Shift+Command+P`;
2. type `reload window`;
3. choose `Developer: Reload Window`;
-->

## Acknowledgements

The icon is created by [Freepik - Flaticon](https://www.flaticon.com)
