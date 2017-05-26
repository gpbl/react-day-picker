'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Month;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _Weekdays = require('./Weekdays');

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _Helpers = require('./Helpers');

var _DateUtils = require('./DateUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Month(_ref) {
  var classNames = _ref.classNames,
      month = _ref.month,
      months = _ref.months,
      fixedWeeks = _ref.fixedWeeks,
      captionElement = _ref.captionElement,
      weekdayElement = _ref.weekdayElement,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      weekdaysLong = _ref.weekdaysLong,
      weekdaysShort = _ref.weekdaysShort,
      firstDayOfWeek = _ref.firstDayOfWeek,
      onCaptionClick = _ref.onCaptionClick,
      children = _ref.children,
      footer = _ref.footer,
      showWeekNumbers = _ref.showWeekNumbers,
      onWeekClick = _ref.onWeekClick;

  var captionProps = {
    date: month,
    classNames: classNames,
    months: months,
    localeUtils: localeUtils,
    locale: locale,
    onClick: onCaptionClick ? function (e) {
      return onCaptionClick(month, e);
    } : undefined
  };
  var caption = _react2.default.isValidElement(captionElement) ? _react2.default.cloneElement(captionElement, captionProps) : _react2.default.createElement(captionElement, captionProps);

  var weeks = (0, _Helpers.getWeekArray)(month, firstDayOfWeek, fixedWeeks);

  return _react2.default.createElement(
    'div',
    { className: classNames.month, role: 'grid' },
    caption,
    _react2.default.createElement(_Weekdays2.default, {
      classNames: classNames,
      weekdaysShort: weekdaysShort,
      weekdaysLong: weekdaysLong,
      firstDayOfWeek: firstDayOfWeek,
      showWeekNumbers: showWeekNumbers,
      locale: locale,
      localeUtils: localeUtils,
      weekdayElement: weekdayElement
    }),
    _react2.default.createElement(
      'div',
      { className: classNames.body, role: 'rowgroup' },
      weeks.map(function (week) {
        var weekNumber = void 0;
        if (showWeekNumbers) {
          weekNumber = (0, _DateUtils.getWeekNumber)(week[0]);
        }
        return _react2.default.createElement(
          'div',
          { key: week[0].getTime(), className: classNames.week, role: 'row' },
          showWeekNumbers && _react2.default.createElement(
            'div',
            {
              className: classNames.weekNumber,
              tabIndex: 0,
              role: 'gridcell',
              onClick: function onClick(e) {
                return onWeekClick(weekNumber, week, e);
              }
            },
            weekNumber
          ),
          week.map(function (day) {
            return children(day, month);
          })
        );
      })
    ),
    footer && _react2.default.createElement(
      'div',
      { className: classNames.footer },
      footer
    )
  );
}

Month.propTypes = {
  classNames: _PropTypes2.default.shape({
    month: _PropTypes2.default.string.isRequired,
    body: _PropTypes2.default.string.isRequired,
    week: _PropTypes2.default.string.isRequired
  }).isRequired,

  month: _PropTypes2.default.instanceOf(Date).isRequired,
  months: _PropTypes2.default.arrayOf(_PropTypes2.default.string),

  fixedWeeks: _PropTypes2.default.bool,
  captionElement: _PropTypes2.default.oneOfType([_PropTypes2.default.element, _PropTypes2.default.func, _PropTypes2.default.instanceOf(_react2.default.Component)]).isRequired,
  weekdayElement: _PropTypes2.default.oneOfType([_PropTypes2.default.element, _PropTypes2.default.func, _PropTypes2.default.instanceOf(_react2.default.Component)]),

  footer: _PropTypes2.default.node,
  showWeekNumbers: _PropTypes2.default.bool,
  onWeekClick: _PropTypes2.default.func,

  locale: _PropTypes2.default.string.isRequired,
  localeUtils: _PropTypes2.default.localeUtils.isRequired,
  weekdaysLong: _PropTypes2.default.arrayOf(_PropTypes2.default.string),
  weekdaysShort: _PropTypes2.default.arrayOf(_PropTypes2.default.string),
  firstDayOfWeek: _PropTypes2.default.number.isRequired,

  onCaptionClick: _PropTypes2.default.func,

  children: _PropTypes2.default.func.isRequired
};
//# sourceMappingURL=Month.js.map