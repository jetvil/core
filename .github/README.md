# @jetvil/core

[![Bundle size](https://img.shields.io/bundlephobia/min/@jetvil/core/latest?label=Bundle%20Size&style=for-the-badge)](https://bundlephobia.com/package/@jetvil/core@latest)
[![Version](https://img.shields.io/npm/v/@jetvil/core?style=for-the-badge&color=cb3837&logo=npm)](https://www.npmjs.com/package/@jetvil/core)&nbsp;
![Downloads](https://img.shields.io/npm/dt/@jetvil/core?style=for-the-badge)&nbsp;
[![GitHub](https://img.shields.io/github/license/jetvil/core?style=for-the-badge)](https://github.com/jetvil/core/blob/main/LICENSE)&nbsp;
[![GitHub Repo stars](https://img.shields.io/github/stars/jetvil/core?color=E9E9E9&logo=Github&style=for-the-badge)](https://www.github.com/jetvil/core)&nbsp;
[![GitHub issues](https://img.shields.io/github/issues-raw/jetvil/core?label=issues&style=for-the-badge)](https://github.com/jetvil/core/issues)&nbsp;

The core functionality based on primitive validation and utility tools for ES6+ and Typescript projects✅.

Includes parts of [@jetvil/types](https://npmjs.com/package/@jetvil/types)

# Features

- 🚀**Easy to use**: Easy to install in your project.
- ✅**ES6+ && TS**: TypeScript and ES6+ support(JS).
- 📦**No dependencies**: You don't depend on anything else.

# Getting Started

## Installation

To use this package, **install** using `npm`, `yarn` or `pnpm`📥:

```bash
# npm
npm install @jetvil/core
# yarn
yarn add @jetvil/core
# pnpm
pnpm install @jetvil/core
```

## Usage

```js
// ES6+ JavaScript CommonsJs
const JetVil = require("@jetvil/core");
// TypeScript || ES6+ JavaScript module
import * as JetVil from "@jetvil/core";
```

### Documentation

- [types](#types)
  - [isFalsy](#isfalsy)
  - [isTruthy](#istruthy)
  - [isString](#isstring)
  - [isNumber](#isnumber)
  - [isBoolean](#isboolean)
  - [isExtendable](#isextendable)
  - [isRegExp](#isregexp)
  - [isDate](#isdate)

### Types

Type checking can be difficult, but with `@jetvil/core`, it's easy.

#### **isFalsy**:

Made from ['Falsy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

```js
const { isFalsy } = require("@jetvil/core");
isFalsy(0); // true
isFalsy(1); // false
```

#### **isTruthy**:

Everything not falsy is truthy. </br>
Made from ['Truthy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

```js
const { isTruthy } = require("@jetvil/core");
isTruthy(1); // true
isTruthy(0); // false
```

#### **isNullish**:

Check if value is null or undefined.

```js
const { isNullish } = require("@jetvil/core");
isNullish(null); // true
isNullish(undefined); // true
isNullish(0); // false
```

#### **isString**:

Check if value is a string.

```js
const { isString } = require("@jetvil/core");
isString("string"); // true
isString(1); // false
```

#### **isNumber**:

Check if value is a number.

```js
const { isNumber } = require("@jetvil/core");
isNumber(1); // true
isNumber(Infinity); // true
isNumber("string"); // false
```

#### **isBoolean**:

Check if value is a boolean.

```js
const { isBoolean } = require("@jetvil/core");
isBoolean(true); // true
isBoolean(false); // true
isBoolean("1"); // false
```

#### **isDate**:

Check if value is a date.

```js
const { isDate } = require("@jetvil/core");
isDate(new Date()); // true
isDate("1"); // false
```

#### **isRegExp**:

Check if value is a regular expression.

```js
const { isRegExp } = require("@jetvil/core");
isRegExp(/test/); // true
isRegExp(new RegExp("test")); // true
isRegExp("1"); // false
```

#### **isExtendable**:

Check if value is extendable for modification.

```js
const { isExtendable } = require("@jetvil/core");
isExtendable({}); // true
isExtendable([]); // true

const prevent = {};
Object.preventExtensions(prevent);
isExtendable(obj); // false

const sealed = {};
Object.seal(sealed);
isExtendable(sealed); // false

const frozen = {};
Object.freeze(frozen);
isExtendable(frozen); // false

const frozenArray = [];
Object.freeze(frozenArray);
isExtendable(frozenArray); // false

isExtendable(1 /**anything else then object or array */); // throws error
```
