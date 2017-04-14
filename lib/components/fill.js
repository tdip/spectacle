"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fill = undefined;

var _taggedTemplateLiteralLoose2 = require("babel-runtime/helpers/taggedTemplateLiteralLoose");

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(["\n  flex: 1;\n"], ["\n  flex: 1;\n"]);

var _react = require("react");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fill = exports.Fill = _styledComponents2.default.div(_templateObject);

Fill.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object
};