'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifierPropType = undefined;

var _react = require('react');

var PrimitiveTypes = {
  localeUtils: _react.PropTypes.shape({
    formatMonthTitle: _react.PropTypes.func,
    formatWeekdayShort: _react.PropTypes.func,
    formatWeekdayLong: _react.PropTypes.func,
    getFirstDayOfWeek: _react.PropTypes.func
  }),
  range: _react.PropTypes.shape({
    from: _react.PropTypes.instanceOf(Date),
    to: _react.PropTypes.instanceOf(Date)
  }),
  after: _react.PropTypes.shape({
    after: _react.PropTypes.instanceOf(Date)
  }),
  before: _react.PropTypes.shape({
    before: _react.PropTypes.instanceOf(Date)
  })
};

var ModifierPropType = exports.ModifierPropType = _react.PropTypes.oneOfType([PrimitiveTypes.after, PrimitiveTypes.before, PrimitiveTypes.range, _react.PropTypes.func, _react.PropTypes.array]);

exports.default = PrimitiveTypes;
//# sourceMappingURL=PropTypes.js.map