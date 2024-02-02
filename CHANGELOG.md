# Change Log

<!--
## [major.minor.patch] - yyyy-mm-dd
### Added
- filena.me {function}: description
### Fixed
### Changed
### Removed
-->

## [Unreleased]

### Added

- Added a configuration parameter to toggle the visibility of the context menu
  command: `sampwdgenerator.showContextMenuCommand`
- Added snippet management to the development environment, which also starts a
  parallel project that will continue in the future
- README.md: table of content

### Changed

- Added many consistency checks in `generator.ts`
- Many improvements in README.md
- Bugfixing and refactoring
- The package size is even smaller
- Parameters are better explained in the `settings` page.

### Removed

- vsc-extension-quickstart.md
- .DS_Store

## [1.2.1] - 2024-01-27

Published version.

### Fixed

- Better README.md

## [1.2.0] - 2024-01-26

### Added

- A context menu command (`Generate password at cursor`) that creates a password
  and prints it at the cursor location, possibly replacing the selected text. If
  there are many cursors, create a password for each of them.
- A command (`Password of any length`) that asks a user for a number and creates
  a list of password with length equal to that number.

### Fixed

- A lot of little bugfixing
- The package is much smaller in size

### Changed

- Some improvements in README.md

## [1.1.2] - 2024-01-25

### Changed

- Better README
- Better configuration definition

## [1.1.0] - 2024-01-24

- Ready for publication.

### Added

- A suit of mocha tests.

### Changed

- Responds immediately to configuration changes

## [1.0.1] - 2024-01-21

### Fixed

- The `sampwdgenerator.passwords` configuration parameter was not being read or
  used.
- A lot of bugfixing.

## [1.0.0] - 2024-01-20

- First release

## [0.2.0] - 2024-01-19

- A lot of bugfixing and refactoring
- Pre-publish

### Added

- Icon
- README
- LICENCE (GNU 3.0)
- Using `esbuild`
- A configuration parameter to change the number of passwords produced for each
  call.
- A configuration parameter to change the minimum number of uppercase,
  lowercase, number, and symbol characters that must be present in each password
  (1 or 2, not more, not less).

### Fixed

- The lines of text in the output pane are better formatted

### Changed

- We no longer use `Math.random()` to produce random numbers but
  `crypto.randomInt()`
- Changed some methods to allow for future development of some features.

## [0.1.0] - 2024-01-15

- First scratch
