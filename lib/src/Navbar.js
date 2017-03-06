'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarPropTypes = undefined;
exports.default = Navbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
  classNames: _react.PropTypes.shape({
    navBar: _react.PropTypes.string.isRequired,
    navButtonPrev: _react.PropTypes.string.isRequired,
    navButtonNext: _react.PropTypes.string.isRequired
  }),
  className: _react.PropTypes.string,
  showPreviousButton: _react.PropTypes.bool,
  showNextButton: _react.PropTypes.bool,
  onPreviousClick: _react.PropTypes.func,
  onNextClick: _react.PropTypes.func,
  dir: _react.PropTypes.string,
  labels: _react.PropTypes.shape({
    previousMonth: _react.PropTypes.string.isRequired,
    nextMonth: _react.PropTypes.string.isRequired
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