# Change Log

<!--
--- EXAMPLE:

## [major.minor.patch] - yyyy-mm-dd

### Added
### Fixed
### Changed
### Removed

--- TODO

## [TODO]

- Fixed
  - Before releasing
    1. [ ] Check for the `<globals.ts>.$$debugging` value. It must be `false`.
    2. [ ] Update the version number into <package.json>.version
  - Releasing
    - Use this code
    ```sh
    vsce publish
    ```
  - After releasing
- Common
  - [ ] Add some 'strong' in the <README.md>
  - [ ] Change the phrase `showing a list of ten passwords with` in <README.md>
  - [ ] Some shield.io into <README.md>
  - [ ] Add the tag `security`
  - [ ] Change <README.md>: 'The randomization engine is based on the crypto library...'
  - [ ] Add a video in <README.md>

--- UNRELEASED

## [Unreleased]

-->

## [1.1.0] - 2024-01-24

- Ready for publication.

### Added

- A suit of mocha tests.

### Changed

- Responds immediately to configuration changes

## [1.0.1] - 2023-01-21

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
