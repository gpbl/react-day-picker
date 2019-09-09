'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LocaleUtils = require('./LocaleUtils');

var _LocaleUtils2 = _interopRequireDefault(_LocaleUtils);

var _keys = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Caption = function (_Component) {
  _inherits(Caption, _Component);

  function Caption(props) {
    _classCallCheck(this, Caption);

    var _this = _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).call(this, props));

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  _createClass(Caption, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.locale !== this.props.locale || nextProps.classNames !== this.props.classNames || nextProps.date.getMonth() !== this.props.date.getMonth() || nextProps.date.getFullYear() !== this.props.date.getFullYear();
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === _keys.ENTER) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          date = _props.date,
          months = _props.months,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        { className: classNames.caption, role: 'heading' },
        _react2.default.createElement(
          'div',
          { onClick: onClick, onKeyUp: this.handleKeyUp },
          months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
        )
      );
    }
  }]);

  return Caption;
}(_react.Component);

Caption.propTypes = {
  date: _propTypes2.default.instanceOf(Date),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  classNames: _propTypes2.default.shape({
    caption: _propTypes2.default.string.isRequired
  }).isRequired
};
Caption.defaultProps = {
  localeUtils: _LocaleUtils2.default
};
exports.default = Caption;
//# sourceMappingURL=Caption.js.map