"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _base = require("../utils/base");

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = function format(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

var Code = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Code, _Component);

  function Code() {
    (0, _classCallCheck3.default)(this, Code);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Code.prototype.createMarkup = function createMarkup() {
    return {
      __html: format(this.props.children)
    };
  };

  Code.prototype.render = function render() {
    return (0, _jsx3.default)("code", {
      className: this.props.className,
      style: [this.context.styles.components.code, _base.getStyles.call(this), this.props.style],
      dangerouslySetInnerHTML: this.createMarkup()
    });
  };

  return Code;
}(_react.Component)) || _class;

exports.default = Code;


Code.contextTypes = {
  styles: _react.PropTypes.object,
  store: _react.PropTypes.object
};