# surround-with
[![Build Status](https://img.shields.io/travis/b3by/surround-with.svg?style=flat-square)](https://travis-ci.org/b3by/surround-with)
[![Dependencies!](https://img.shields.io/david/b3by/surround-with.svg?style=flat-square)](https://david-dm.org/b3by/surround-with)
[![Plugin installations!](https://img.shields.io/apm/dm/surround-with.svg?style=flat-square)](https://atom.io/packages/surround-with)
[![Package version!](https://img.shields.io/apm/v/surround-with.svg?style=flat-square)](https://atom.io/packages/surround-with)
[![License!](https://img.shields.io/apm/l/surround-with.svg?style=flat-square)](https://github.com/b3by/surround-with/blob/master/LICENSE.md)

Easily surround code selections with language constructs.

## About
This package provides a simple utility function that can be used when coding: to
surround a selection with a code construct (that is, a control loop or a
conditional statement).

![Basic](https://raw.githubusercontent.com/b3by/surround-with/master/images/basic.gif)

## Usage
When there is an active selection in the current buffer, the package will
provide a list of constructs that match the current buffer grammar. Once a
construct is pick from the select view, the selection in the buffer will be
surrounded with the construct, and the overall text will be properly indented.

There is **no default binding** for the package. The user can either call the
package from the command palette as `surround-with:surround`, or a new entry can
be placed in the `keymap.cson` file:

```
'atom-workspace atom-text-editor:not([mini])':
  'ctrl-alt-o': 'surround-with:surround'
```

## Supported languages
- [x] C/C++
- [x] Java
- [x] JavaScript
- [x] CoffeeScript
- [x] C#
- [ ] Go
- [ ] Objective-C
- [ ] Perl
- [ ] PHP
- [x] Python
- [ ] Ruby

## :rotating_light: Disclaimer :rotating_light:
This package is available in the Atom package repository, still it is under
heavy development, thus not recommended for production usage. Any help is
heavily appreciated, as well as issues and suggestions!
