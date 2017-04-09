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
  date: _PropTypes2.default.instanceOf(Date),
  months: _PropTypes2.default.arrayOf(_PropTypes2.default.string),
  locale: _PropTypes2.default.string,
  localeUtils: _PropTypes2.default.localeUtils,
  onClick: _PropTypes2.default.func,
  classNames: _PropTypes2.default.shape({
    caption: _PropTypes2.default.string.isRequired
  }).isRequired
};
//# sourceMappingURL=Caption.js.map