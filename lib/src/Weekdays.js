'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Weekdays;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Weekdays(_ref) {
  var classNames = _ref.classNames,
      firstDayOfWeek = _ref.firstDayOfWeek,
      showWeekNumbers = _ref.showWeekNumbers,
      weekdaysLong = _ref.weekdaysLong,
      weekdaysShort = _ref.weekdaysShort,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      weekdayElement = _ref.weekdayElement;

  var days = [];
  for (var i = 0; i < 7; i += 1) {
    var weekday = (i + firstDayOfWeek) % 7;
    var elementProps = {
      key: i,
      className: classNames.weekday,
      weekday: weekday,
      weekdaysLong: weekdaysLong,
      weekdaysShort: weekdaysShort,
      localeUtils: localeUtils,
      locale: locale
    };
    var element = _react2.default.isValidElement(weekdayElement) ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayElement, elementProps);
    days.push(element);
  }

  return _react2.default.createElement(
    'div',
    { className: classNames.weekdays, role: 'rowgroup' },
    _react2.default.createElement(
      'div',
      { className: classNames.weekdaysRow, role: 'row' },
      showWeekNumbers && _react2.default.createElement('div', { className: classNames.weekday }),
      days
    )
  );
}

Weekdays.propTypes = {
  classNames: _PropTypes2.default.shape({
    weekday: _PropTypes2.default.string.isRequired,
    weekdays: _PropTypes2.default.string.isRequired,
    weekdaysRow: _PropTypes2.default.string.isRequired
  }).isRequired,

  firstDayOfWeek: _PropTypes2.default.number.isRequired,
  weekdaysLong: _PropTypes2.default.arrayOf(_PropTypes2.default.string),
  weekdaysShort: _PropTypes2.default.arrayOf(_PropTypes2.default.string),
  showWeekNumbers: _PropTypes2.default.bool,
  locale: _PropTypes2.default.string.isRequired,
  localeUtils: _PropTypes2.default.localeUtils.isRequired,
  weekdayElement: _PropTypes2.default.oneOfType([_PropTypes2.default.element, _PropTypes2.default.func, _PropTypes2.default.instanceOf(_react2.default.Component)])
};
//# sourceMappingURL=Weekdays.js.map