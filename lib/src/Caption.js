'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Caption;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Caption(_ref) {
  var classNames = _ref.classNames,
      date = _ref.date,
      months = _ref.months,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: classNames.caption, onClick: onClick, role: 'heading' },
    months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
  );
}

Caption.propTypes = {
  date: _react.PropTypes.instanceOf(Date),
  months: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  locale: _react.PropTypes.string,
  localeUtils: _PropTypes2.default.localeUtils,
  onClick: _react.PropTypes.func,
  classNames: _react.PropTypes.shape({
    caption: _react.PropTypes.string.isRequired
  }).isRequired
};
//# sourceMappingURL=Caption.js.map