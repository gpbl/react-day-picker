'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarPropTypes = undefined;
exports.default = Navbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _classNames = require('./classNames');

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar(_ref) {
  var classNames = _ref.classNames,
      className = _ref.className,
      showPreviousButton = _ref.showPreviousButton,
      showNextButton = _ref.showNextButton,
      onPreviousClick = _ref.onPreviousClick,
      onNextClick = _ref.onNextClick,
      labels = _ref.labels,
      dir = _ref.dir;

  var previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  var nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  var previousButton = showPreviousButton && _react2.default.createElement('span', {
    role: 'button',
    'aria-label': labels.previousMonth,
    key: 'previous',
    className: classNames.navButtonPrev,
    onClick: function onClick() {
      return previousClickHandler();
    }
  });

  var nextButton = showNextButton && _react2.default.createElement('span', {
    role: 'button',
    'aria-label': labels.nextMonth,
    key: 'right',
    className: classNames.navButtonNext,
    onClick: function onClick() {
      return nextClickHandler();
    }
  });

  return _react2.default.createElement(
    'div',
    { className: className || classNames.navBar },
    dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
  );
}

var NavbarPropTypes = exports.NavbarPropTypes = {
  classNames: _PropTypes2.default.shape({
    navBar: _PropTypes2.default.string.isRequired,
    navButtonPrev: _PropTypes2.default.string.isRequired,
    navButtonNext: _PropTypes2.default.string.isRequired
  }),
  className: _PropTypes2.default.string,
  showPreviousButton: _PropTypes2.default.bool,
  showNextButton: _PropTypes2.default.bool,
  onPreviousClick: _PropTypes2.default.func,
  onNextClick: _PropTypes2.default.func,
  dir: _PropTypes2.default.string,
  labels: _PropTypes2.default.shape({
    previousMonth: _PropTypes2.default.string.isRequired,
    nextMonth: _PropTypes2.default.string.isRequired
  })
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  classNames: _classNames2.default,
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
//# sourceMappingURL=Navbar.js.map