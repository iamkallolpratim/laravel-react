webpackJsonp([0],{

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(490);

var _redux = __webpack_require__(201);

var _actions = __webpack_require__(1125);

var superheroActions = _interopRequireWildcard(_actions);

var _loading = __webpack_require__(492);

var _loading2 = _interopRequireDefault(_loading);

var _superheroList = __webpack_require__(1127);

var _superheroList2 = _interopRequireDefault(_superheroList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeContainer = function (_Component) {
    _inherits(HomeContainer, _Component);

    function HomeContainer() {
        _classCallCheck(this, HomeContainer);

        return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).apply(this, arguments));
    }

    _createClass(HomeContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.superheroActions.getAllSuperheroes();
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx(_react2.default.Fragment, {}, void 0, this.props.superheroes.loading ? _jsx(_loading2.default, {}) : _jsx(_superheroList2.default, {
                superheroes: this.props.superheroes.superheroes
            }));
        }
    }]);

    return HomeContainer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        superheroes: state.superhero
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        superheroActions: (0, _redux.bindActionCreators)(superheroActions, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeContainer);

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllSuperheroes = getAllSuperheroes;

var _types = __webpack_require__(491);

var types = _interopRequireWildcard(_types);

var _superhero = __webpack_require__(1126);

var _superhero2 = _interopRequireDefault(_superhero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loadingSuperheroes() {
    return {
        type: types.LOADING_SUPERHEROES
    };
}

function loadSuperheroesSuccess(superheroes) {
    return {
        type: types.LOAD_SUPERHERO_SUCCESS,
        superheroes: superheroes
    };
}

function getAllSuperheroes() {
    return function (dispatch) {
        dispatch(loadingSuperheroes());
        return _superhero2.default.getAllSuperHeroes().then(function (superheroes) {
            dispatch(loadSuperheroesSuccess(superheroes));
        });
    };
}

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuperheroApi = function () {
    function SuperheroApi() {
        _classCallCheck(this, SuperheroApi);
    }

    _createClass(SuperheroApi, null, [{
        key: 'getAllSuperHeroes',
        value: function getAllSuperHeroes() {
            return fetch('/api/superheroes', {
                credentials: 'same-origin'
            }).then(function (response) {
                return response.json();
            }).catch(function (error) {
                return error;
            });
        }
    }]);

    return SuperheroApi;
}();

exports.default = SuperheroApi;

/***/ }),

/***/ 1127:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuperHeroList = function (_Component) {
    _inherits(SuperHeroList, _Component);

    function SuperHeroList() {
        _classCallCheck(this, SuperHeroList);

        return _possibleConstructorReturn(this, (SuperHeroList.__proto__ || Object.getPrototypeOf(SuperHeroList)).apply(this, arguments));
    }

    _createClass(SuperHeroList, [{
        key: 'render',
        value: function render() {
            var columns = [{
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            }, {
                title: 'Creator',
                dataIndex: 'creator',
                key: 'creator'
            }];
            return _jsx(_antd.Table, {
                columns: columns,
                dataSource: this.props.superheroes.data
            });
        }
    }]);

    return SuperHeroList;
}(_react.Component);

exports.default = SuperHeroList;

/***/ })

});