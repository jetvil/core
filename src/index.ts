//types
import { isTruthy } from "./lib/validate/types";
import { isFalsy } from "./lib/validate/types";
import { isBoolean } from "./lib/validate/types";
import { isNumber } from "./lib/validate/types";
import { isString } from "./lib/validate/types";
// import isObject from "./lib/validate/types/isObject"; // TODO
// import isArray from "./lib/validate/types/isArray"; // TODO
// import isFunction from "./lib/validate/types/isFunction"; // TODO
import { isNullish } from "./lib/validate/types";
import { isDate } from "./lib/validate/types";
import { isExtendable } from "./lib/validate/types";
import { isRegExp } from "./lib/validate/types";

// input
import { isValidDate } from "./lib/validate/input";
import { isValidPassword } from "./lib/validate/input";
import { isValidUrl } from "./lib/validate/input";
import { isValidEmail } from "./lib/validate/input";

// v-listener
import { VListener } from "./lib/validate/v-listener";

export { VListener }; // v-listener
export { isValidDate, isValidPassword, isValidUrl, isValidEmail }; // input
export { isTruthy, isFalsy, isBoolean, isNumber, isString, isNullish, isDate, isExtendable, isRegExp }; // types
export default {
  isTruthy,
  isFalsy,
  isBoolean,
  isNumber,
  isString,
  isNullish,
  isDate,
  isExtendable,
  isRegExp,
  isValidDate,
  isValidEmail,
  isValidPassword,
  isValidUrl,
  VListener,
}; // all
