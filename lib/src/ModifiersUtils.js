'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayMatchesModifier = dayMatchesModifier;
exports.getModifiersForDay = getModifiersForDay;

var _DateUtils = require('./DateUtils');

var _Helpers = require('./Helpers');

/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
function dayMatchesModifier(day, modifier) {
  if (!modifier) {
    return false;
  }
  var arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(function (mod) {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return (0, _DateUtils.isSameDay)(day, mod);
    }
    if ((0, _Helpers.isRangeOfDates)(mod)) {
      return (0, _DateUtils.isDayInRange)(day, mod);
    }
    if (mod.after && mod.before && (0, _DateUtils.isDayAfter)(mod.before, mod.after)) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) && (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after && mod.before && ((0, _DateUtils.isDayAfter)(mod.after, mod.before) || (0, _DateUtils.isSameDay)(mod.after, mod.before))) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) || (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after) {
      return (0, _DateUtils.isDayAfter)(day, mod.after);
    }
    if (mod.before) {
      return (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.daysOfWeek) {
      return mod.daysOfWeek.some(function (dayOfWeek) {
        return day.getDay() === dayOfWeek;
      });
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}

/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
function getModifiersForDay(day) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(modifiersObj).reduce(function (modifiers, modifierName) {
    var value = modifiersObj[modifierName];
    if (dayMatchesModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

exports.default = { dayMatchesModifier: dayMatchesModifier, getModifiersForDay: getModifiersForDay };
//# sourceMappingURL=ModifiersUtils.js.map