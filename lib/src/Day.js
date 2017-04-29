'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Day;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classNames = require('./classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
} /* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function Day(_ref) {
  var classNames = _ref.classNames,
      modifiersStyles = _ref.modifiersStyles,
      day = _ref.day,
      tabIndex = _ref.tabIndex,
      empty = _ref.empty,
      modifiers = _ref.modifiers,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onTouchStart = _ref.onTouchStart,
      onTouchEnd = _ref.onTouchEnd,
      onFocus = _ref.onFocus,
      ariaLabel = _ref.ariaLabel,
      ariaDisabled = _ref.ariaDisabled,
      ariaSelected = _ref.ariaSelected,
      children = _ref.children;

  var className = classNames.day;
  if (classNames !== _classNames2.default) {
    // When using CSS modules prefix the modifier as required by the BEM syntax
    className += ' ' + Object.keys(modifiers).join(' ');
  } else {
    className += Object.keys(modifiers).map(function (modifier) {
      return ' ' + className + '--' + modifier;
    }).join('');
  }

  var style = void 0;
  if (modifiersStyles) {
    Object.keys(modifiers).filter(function (modifier) {
      return !!modifiersStyles[modifier];
    }).forEach(function (modifier) {
      style = Object.assign({}, style, modifiersStyles[modifier]);
    });
  }

  if (empty) {
    return _react2.default.createElement('div', { role: 'gridcell', 'aria-disabled': true, className: className, style: style });
  }

  return _react2.default.createElement(
    'div',
    {
      className: className,
      tabIndex: tabIndex || 0,
      style: style,
      role: 'gridcell',
      'aria-label': ariaLabel,
      'aria-disabled': ariaDisabled.toString(),
      'aria-selected': ariaSelected.toString(),
      onClick: handleEvent(onClick, day, modifiers),
      onKeyDown: handleEvent(onKeyDown, day, modifiers),
      onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
      onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
      onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
      onTouchStart: handleEvent(onTouchStart, day, modifiers),
      onFocus: handleEvent(onFocus, day, modifiers)
    },
    children
  );
}

Day.propTypes = {
  classNames: _PropTypes2.default.shape({
    day: _PropTypes2.default.string.isRequired
  }).isRequired,

  day: _PropTypes2.default.instanceOf(Date).isRequired,
  children: _PropTypes2.default.node.isRequired,

  ariaDisabled: _PropTypes2.default.bool,
  ariaLabel: _PropTypes2.default.string,
  ariaSelected: _PropTypes2.default.bool,
  empty: _PropTypes2.default.bool,
  modifiers: _PropTypes2.default.object,
  modifiersStyles: _PropTypes2.default.object,
  onClick: _PropTypes2.default.func,
  onKeyDown: _PropTypes2.default.func,
  onMouseEnter: _PropTypes2.default.func,
  onMouseLeave: _PropTypes2.default.func,
  onTouchEnd: _PropTypes2.default.func,
  onTouchStart: _PropTypes2.default.func,
  onFocus: _PropTypes2.default.func,
  tabIndex: _PropTypes2.default.number
};

Day.defaultProps = {
  modifiers: {},
  empty: false
};
//# sourceMappingURL=Day.js.map