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

- 🚀 **Easy to use**: Easy to install in your project.
- ✅ **ES6+ && TS**: TypeScript and ES6+ support(JS).
- 📦 **No dependencies**: You don't depend on anything else.
- 💵 **Free**: It's free and always will be, the beauty of open source.

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
- [matchers/input](#matchers)
  - [isValidEmail](#isvalidemail)
  - [isValidPassword](#isvalidpassword)
    - [options](#options-isvalidpassword)
  - [isValidUrl](#isvalidurl)
  - [isUnique](#isunique)
  - [isSoftMatch](#issoftmatch)
  - [isDeepMatch](#isdeepmatch)

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

Everything not falsy is truthy.

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

### Matchers

_refered to as `input` in code._

Matchers are functions that check if a value matches a certain pattern or value.

#### **isUnique**:

Check if value is unique in array or object(key mostly).

```js
const { isUnique } = require("@jetvil/core");
isUnique([1, 2, 3, 4], 1); // false
isUnique([1, 2, 3, 4], { a: 1 }); // throws error
isUnique({ a: 1, b: 2 }, { a: 1 }); // false
isUnique({ a: 1, b: 2 }, { c: 1 }); // true
```

#### **isSoftMatch**:

Check if two values soft match with each other.

```js
const { isSoftMatch } = require("@jetvil/core");
isSoftMatch("string", "STRING"); // true
isSoftMatch("string", "abc"); // false
isSoftMatch(1, 1.0); // true
```

#### **isDeepMatch**:

Check if two values deep match with each other.

```js
const { isDeepMatch } = require("@jetvil/core");
isDeepMatch({ a: 1 }, { a: 1 }); // true
isDeepMatch({ a: 1 }, { a: 2 }); // false
isDeepMatch([1, 2, { a: 3 }], [1, 2, { a: 3 }]); // true

// without the await it will return a promise holding the boolean.
await isDeepMatch(Promise.resolve(1), Promise.resolve(1)); // true
```

#### **isValidEmail**:

Check if value is a valid email.

```js
const { isValidEmail } = require("@jetvil/core");
isValidEmail("test@test.test"); // true
isValidEmail(""); // false
isValidEmail("test@test"); // false
isValidEmail("test@test.t"); // false
isValidEmail(123); // throws error
```

#### **isValidPassword**:

Check if value is a valid password.

##### **options-isvalidpassword**:

- `minLength`: number, default `8`
- `maxLength`: number, default `32`
- `numbers`: number, default `1`
- `specialChars`: number, default `1`

```js
const { isValidPassword } = require("@jetvil/core");
isValidPassword("test"); // false
isValidPassword("te!1", { minLength: 4 }); // true
isValidPassword(123); // throws error
isValidPassword("t", { minLength: 1, numbers: 0, specialChars: 0 }); // true
```

#### **isValidUrl**:

Check if value is a valid url.

> IPV4 and IPV6 are not supported.

```js
const { isValidUrl } = require("@jetvil/core");
isValidUrl("https://google.com"); // true
isValidUrl("google.com"); // true
isValidUrl("google"); // false
isValidUrl(123); // throws error
```

#### **isValidDate**:

Check if value is a valid date.
This function takes any input and will parse it to a Date, `-1` and `1` will work because they are valid dates.

```js
const { isValidDate } = require("@jetvil/core");
isValidDate(new Date()); // true
isValidDate("1"); //true: because it will be parsed to a date starting from 1970.
isValidDate(-1); //true : because it will be parsed to a date starting from 1970, moving backwards.
isValidDate("string"); // false
```

# Contributing

Found a bug🦟? or want to suggest a new feature🆕? or just want to help🆘?

Feel free to open an issue or a pull request.

Contributions are always welcome!🎉

- Fork the project [here](https://github.com/jetvil/core/fork).
- Create a new branch like this: `git checkout -b feature/featureName`.
- Commit your changes to your branch: `git commit -m 'Create AwesomeFeature'`⚙️.
- Push your branch: `git push origin feature/featureName`.
- Open a pull request on the `dev` branch [here](https://github.com/jetvil/core/pulls)🔃.

📒**Note:** Make sure to add tests for your changes ✅.
