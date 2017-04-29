'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.dayMatchesModifier = dayMatchesModifier;
exports.getModifiersForDay = getModifiersForDay;

var _DateUtils = require('./DateUtils');

var _Helpers = require('./Helpers');

function dayMatchesModifier(d, modifier) {
  if (!modifier) {
    return false;
  }
  var arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(function(mod) {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return (0, _DateUtils.isSameDay)(d, mod);
    }
    if ((0, _Helpers.isRangeOfDates)(mod)) {
      return (0, _DateUtils.isDayInRange)(d, mod);
    }
    if (mod.after) {
      return (0, _DateUtils.isDayAfter)(d, mod.after);
    }
    if (mod.before) {
      return (0, _DateUtils.isDayBefore)(d, mod.before);
    }
    if (typeof mod === 'function') {
      return mod(d);
    }
    return false;
  });
}

function getModifiersForDay(d) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined
    ? arguments[1]
    : {};

  return Object.keys(modifiersObj).reduce(function(modifiers, modifierName) {
    var value = modifiersObj[modifierName];
    if (dayMatchesModifier(d, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

exports.default = {
  dayMatchesModifier: dayMatchesModifier,
  getModifiersForDay: getModifiersForDay,
};
//# sourceMappingURL=ModifiersUtils.js.map
