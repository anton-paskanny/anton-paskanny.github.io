/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateBlogForm = function (_React$PureComponent) {
  _inherits(CreateBlogForm, _React$PureComponent);

  function CreateBlogForm(props) {
    _classCallCheck(this, CreateBlogForm);

    var _this = _possibleConstructorReturn(this, (CreateBlogForm.__proto__ || Object.getPrototypeOf(CreateBlogForm)).call(this, props));

    _this.state = {
      author: '',
      description: '',
      showError: false
    };

    _this.handleAuthorChange = _this.handleAuthorChange.bind(_this);
    _this.handleDescriptionChange = _this.handleDescriptionChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(CreateBlogForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      if (this.state.author.length === 0 || this.state.description.length === 0) {
        this.setState({
          showError: true
        });
      } else {
        this.props.addBlog({
          author: this.state.author,
          description: this.state.description
        });

        this.setState({
          author: '',
          description: '',
          showError: false
        });
      }
    }
  }, {
    key: 'handleAuthorChange',
    value: function handleAuthorChange(event) {
      this.setState({
        author: event.target.value
      });
    }
  }, {
    key: 'handleDescriptionChange',
    value: function handleDescriptionChange(event) {
      this.setState({
        description: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { className: 'form', onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'h2',
          { className: 'form__title' },
          'Add new blog'
        ),
        _react2.default.createElement(
          'button',
          { className: 'form__close-btn', type: 'button', onClick: this.props.togglePopup },
          '\xD7'
        ),
        _react2.default.createElement('input', { className: 'form__input',
          type: 'text',
          value: this.state.author,
          onChange: this.handleAuthorChange,
          placeholder: 'Author'
        }),
        _react2.default.createElement('textarea', { className: 'form__textarea',
          value: this.state.description,
          onChange: this.handleDescriptionChange,
          placeholder: 'Description'
        }),
        _react2.default.createElement('input', { className: 'form__submit', type: 'submit', value: 'Send' }),
        this.state.showError && _react2.default.createElement(
          'p',
          { className: 'form__error' },
          'Please, fill in all necessary fields'
        )
      );
    }
  }]);

  return CreateBlogForm;
}(_react2.default.PureComponent);

exports.default = CreateBlogForm;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _template = __webpack_require__(5);

var _template2 = _interopRequireDefault(_template);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;

var app = (0, _express2.default)();
app.use(_express2.default.static('dist'));

app.get('/', function (res, req) {
<<<<<<< Updated upstream
  var component = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
  var indexPage = (0, _template2.default)(component);
=======
  var stringApp = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
  var indexPage = (0, _template2.default)(stringApp);
>>>>>>> Stashed changes
  res.send(indexPage);
});

app.listen(3000);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (body) {
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n      <link href=\"/dist/styles.css\" rel=\"stylesheet\">\n      <title>Simple react app</title>\n    </head>\n    <body>\n      <div class=\"app\">" + body + "</div>\n\n      <script src=\"/dist/bundle.js\"></script>\n    </body>\n    </html>\n  ";
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BlogsCreationForm = __webpack_require__(1);

var _BlogsCreationForm2 = _interopRequireDefault(_BlogsCreationForm);

var _BlogsList = __webpack_require__(8);

var _BlogsList2 = _interopRequireDefault(_BlogsList);

var _Filter = __webpack_require__(11);

var _Filter2 = _interopRequireDefault(_Filter);

var _AddBlogBtn = __webpack_require__(13);

var _AddBlogBtn2 = _interopRequireDefault(_AddBlogBtn);

var _Overlay = __webpack_require__(15);

var _Overlay2 = _interopRequireDefault(_Overlay);

__webpack_require__(18);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      blogs: [],
      filteredBlogs: [],
      showPopup: false,
      showFilteringError: false,
      showInitialBlogs: true,
      searchValue: ''
    };

    _this.addBlog = _this.addBlog.bind(_this);
    _this.deleteBlog = _this.deleteBlog.bind(_this);
    _this.filterByAuthor = _this.filterByAuthor.bind(_this);
    _this.togglePopup = _this.togglePopup.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'hidePopupOnEscKeyPress',
    value: function hidePopupOnEscKeyPress(event) {
      if (this.state.showPopup && event.keyCode === 27) {
        this.setState({
          showPopup: false
        });
      }
    }
    /**
     * Add new blog into blogs array.
     * @constructor
     * @param {object} blog - blog to add
     */

  }, {
    key: 'addBlog',
    value: function addBlog(blog) {
      this.setState(function (prevState) {
        return {
          blogs: [].concat(_toConsumableArray(prevState.blogs), [blog])
        };
      });
    }
    /**
     * Delete blog from initial and filtered array.
     * @constructor
     * @param {number} index - blog's index in added blogs array (initial array)
     * @param {number} filteredIndex - blog's index in filtered blogs array
     * New blogs are added into blogs array !!!
     */

  }, {
    key: 'deleteBlog',
    value: function deleteBlog(key, filteredKey) {
      var blogs = this.state.blogs.slice();
      blogs.splice(key, 1);

      if (typeof filteredKey === 'number') {

        var filteredBlogs = this.filterBlogsArray(blogs, this.state.searchValue);

        this.setState({
          blogs: blogs,
          filteredBlogs: filteredBlogs,
          showFilteringError: filteredBlogs.length === 0 && blogs.length !== 0 ? true : false
        });

        return;
      }

      this.setState({
        blogs: blogs
      });
    }
  }, {
    key: 'filterBlogsArray',
    value: function filterBlogsArray(blogs, searchVal) {
      return blogs.filter(function (blog, index) {

        if (blog.author.toLowerCase().search(searchVal.toLowerCase()) !== -1) {
          return Object.assign(blog, { index: index });
        }

        return false;
      });
    }
  }, {
    key: 'filterByAuthor',
    value: function filterByAuthor(event) {

      if (event.target.value.length === 0) {
        this.setState({
          showInitialBlogs: true,
          showFilteringError: false,
          searchValue: '',
          filteredBlogs: []
        });

        return;
      }

      var filteredBlogs = this.filterBlogsArray(this.state.blogs, event.target.value);

      this.setState({
        filteredBlogs: filteredBlogs,
        showFilteringError: filteredBlogs.length === 0 ? true : false,
        showInitialBlogs: false,
        searchValue: event.target.value
      });
    }
  }, {
    key: 'togglePopup',
    value: function togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener("keydown", this.hidePopupOnEscKeyPress.bind(this), false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Simple blogs app'
        ),
        _react2.default.createElement(_AddBlogBtn2.default, { togglePopup: this.togglePopup }),
        _react2.default.createElement(_Filter2.default, { filterByAuthor: this.filterByAuthor,
          blogsLength: this.state.blogs.length,
          showFilteringError: this.state.showFilteringError
        }),
        _react2.default.createElement(_BlogsList2.default, { blogs: this.state.blogs,
          filteredBlogs: this.state.filteredBlogs,
          showInitialBlogs: this.state.showInitialBlogs,
          deleteBlog: this.deleteBlog
        }),
        this.state.showPopup && _react2.default.createElement(_Overlay2.default, { component: _react2.default.createElement(_BlogsCreationForm2.default, { addBlog: this.addBlog, togglePopup: this.togglePopup }) })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Blog = __webpack_require__(9);

var _Blog2 = _interopRequireDefault(_Blog);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogsList = function (_React$Component) {
  _inherits(BlogsList, _React$Component);

  function BlogsList(props) {
    _classCallCheck(this, BlogsList);

    return _possibleConstructorReturn(this, (BlogsList.__proto__ || Object.getPrototypeOf(BlogsList)).call(this, props));
  }

  _createClass(BlogsList, [{
    key: 'renderBlogs',
    value: function renderBlogs() {
      var _this2 = this;

      return this.props.blogs.map(function (blog, index) {
        return _react2.default.createElement(_Blog2.default, { key: index,
          data: blog,
          deleteBlog: _this2.props.deleteBlog,
          index: index
        });
      });
    }
  }, {
    key: 'renderFilteredBlogs',
    value: function renderFilteredBlogs() {
      var _this3 = this;

      return this.props.filteredBlogs.map(function (blog, index) {
        return _react2.default.createElement(_Blog2.default, { key: index,
          data: blog,
          deleteBlog: _this3.props.deleteBlog,
          index: blog.index,
          filteredIndex: index
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'blogs' },
        this.props.showInitialBlogs ? this.renderBlogs() : this.renderFilteredBlogs()
      );
    }
  }]);

  return BlogsList;
}(_react2.default.Component);

exports.default = BlogsList;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var deleteBlog = function deleteBlog() {
    props.deleteBlog(props.index, props.filteredIndex);
  };

  return _react2.default.createElement(
    "li",
    { className: "blogs__item" },
    _react2.default.createElement(
      "h3",
      { className: "blogs__title" },
      props.data.author
    ),
    _react2.default.createElement(
      "p",
      { className: "blogs__text" },
      props.data.description
    ),
    _react2.default.createElement(
      "button",
      { type: "button", className: "blogs__delete-btn", onClick: deleteBlog },
      "\u2A2F"
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'filter' },
    _react2.default.createElement(
      'h3',
      { className: 'filter__title' },
      'Filter blogs by author\'s name'
    ),
    _react2.default.createElement('input', { type: 'text',
      placeholder: 'Author\'s name',
      onChange: props.filterByAuthor,
      className: 'filter__input',
      disabled: props.blogsLength === 0
    }),
    props.showFilteringError && _react2.default.createElement(
      'p',
      { className: 'filter__error' },
      'Nothing was found'
    )
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'button',
    { className: 'add-blog-btn', onClick: props.togglePopup },
    '+'
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BlogsCreationForm = __webpack_require__(1);

var _BlogsCreationForm2 = _interopRequireDefault(_BlogsCreationForm);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _reactDom2.default.createPortal(_react2.default.createElement(
    'div',
    { className: 'overlay' },
    props.component
  ), document.querySelector("body"));
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);