# Change Log

<!--
## [major.minor.patch] - yyyy-mm-dd
(When publish put this number into <package.json>.version)

### Added

- An add

### Fixed
### Changed
### Removed

## [TODO]

- [x] Add a configuration parameter to change the number of
      passwords produced for each call.
- [x] Add a configuration parameter to change the minimum
      number of uppercase, lowercase, number, and symbol
      characters that must be present in each
      password (1 or 2, not more).
- [x] Change README with new featiures.

## [Unreleased]
-->

## [0.2.0] - ????-??-??

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
