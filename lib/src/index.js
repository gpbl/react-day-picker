'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DayPicker = require('./DayPicker');

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _DayPickerInput = require('./DayPickerInput');

var _DayPickerInput2 = _interopRequireDefault(_DayPickerInput);

var _DateUtils = require('./DateUtils');

var DateUtils = _interopRequireWildcard(_DateUtils);

var _LocaleUtils = require('./LocaleUtils');

var LocaleUtils = _interopRequireWildcard(_LocaleUtils);

var _ModifiersUtils = require('./ModifiersUtils');

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_DayPicker2.default.Input = _DayPickerInput2.default;
_DayPicker2.default.DateUtils = DateUtils;
_DayPicker2.default.LocaleUtils = LocaleUtils;
_DayPicker2.default.ModifiersUtils = ModifiersUtils;

exports.default = _DayPicker2.default;
//# sourceMappingURL=index.js.map