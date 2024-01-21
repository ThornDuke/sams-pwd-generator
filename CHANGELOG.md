# Change Log

<!--
--- EXAMPLE:

## [major.minor.patch] - yyyy-mm-dd

### Added

- An add

### Fixed
### Changed
### Removed

---

## [TODO]

- Before releasing
  1. Check for the `<globals.ts>.$$debugging` value. It must be `false`.
  2. Update the version number into <package.json>.version

---

## [Unreleased]

-->

## [1.0.1] - 2023-01-21

### Fixed

- The `sampwdgenerator.passwords` configuration parameter was not being read or
  used.

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
  (1 or 2, not more).

### Fixed

- The lines of text in the output pane are better formatted

### Changed

- We no longer use `Math.random()` to produce random numbers but
  `crypto.randomInt()`
- Changed some methods to allow for future development of some features.

## [0.1.0] - 2024-01-15

- First scratch
