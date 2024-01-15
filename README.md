# Sam's Passwords Generator

This extension allows you to easily create passwords of different lengths, from
8 to 16 characters. Passwords all have at least one uppercase character, one
lowercase character, one number, and one special character.

You can configure the set of characters that will be used to create passwords.

## Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Sam's Password Generator`
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
list of ten passwords with the chosen length. Choose one, copy and paste it into
the editor where you need it.

## Recommended Settings

Click on `Manage / Extension settings` and change the values ​​according to your
preferences.

Alternatively, you can change the values ​​directly in the configuration file:

1. Open the command palette (either with `F1` or `Ctrl+Shift+P` or
   `Shift+Command+P`)
2. Type `open settings`
3. You are presented with a few options, choose `Open User Settings (JSON)`

```json
{
  "sampwdgenerator.uppercases": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "sampwdgenerator.lowercases": "abcdefghijklmnopqrstuvwxyz",
  "sampwdgenerator.numbers": "0123456789",
  "sampwdgenerator.symbols": "£$%&*§#@"
}
```