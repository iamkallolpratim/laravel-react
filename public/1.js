webpackJsonp([1],{

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(200);

var _loginForm = __webpack_require__(1128);

var _loginForm2 = _interopRequireDefault(_loginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginContainer = function (_Component) {
    _inherits(LoginContainer, _Component);

    function LoginContainer() {
        _classCallCheck(this, LoginContainer);

        return _possibleConstructorReturn(this, (LoginContainer.__proto__ || Object.getPrototypeOf(LoginContainer)).apply(this, arguments));
    }

    _createClass(LoginContainer, [{
        key: 'render',
        value: function render() {
            return _jsx(_react2.default.Fragment, {}, void 0, _jsx(_antd.Row, {}, void 0, _jsx(_antd.Col, {
                span: 8,
                offset: 8
            }, void 0, _jsx(_loginForm2.default, {}))));
        }
    }]);

    return LoginContainer;
}(_react.Component);

exports.default = LoginContainer;

/***/ }),

/***/ 1128:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Missing class properties transform.\n\n\u001b[0m \u001b[90m  7 | \u001b[39m\n \u001b[90m  8 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m    handleSubmit \u001b[33m=\u001b[39m (e) \u001b[33m=>\u001b[39m {\n \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 10 | \u001b[39m        console\u001b[33m.\u001b[39mlog(\u001b[32m'hello'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 11 | \u001b[39m    }\u001b[33m;\u001b[39m\n \u001b[90m 12 | \u001b[39m\u001b[0m\n");

/***/ })

});