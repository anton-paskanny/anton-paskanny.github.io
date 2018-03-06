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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var mongoose = __webpack_require__(9);
var passportLocalMongoose = __webpack_require__(28);
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);

module.exports = User;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Schema, 'Schema', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/models/user.js');
    reactHotLoader.register(userSchema, 'userSchema', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/models/user.js');
    reactHotLoader.register(User, 'User', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/models/user.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var SET_LOGGED_IN = exports.SET_LOGGED_IN = 'SET_LOGGED_IN';

var setLoggedIn = exports.setLoggedIn = function setLoggedIn(user) {
  return {
    type: SET_LOGGED_IN,
    user: user
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SET_LOGGED_IN, 'SET_LOGGED_IN', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/actions/user.js');
  reactHotLoader.register(setLoggedIn, 'setLoggedIn', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/actions/user.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var ADD_BLOG = exports.ADD_BLOG = "ADD_BLOG";
var DELETE_BLOG = exports.DELETE_BLOG = "DELETE_BLOG";
var FETCH_BLOGS = exports.FETCH_BLOGS = "FETCH_BLOGS";

var addBlog = exports.addBlog = function addBlog(blog) {
  return function (dispatch) {

    fetch('http://localhost:3000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
      credentials: 'include',
      mode: 'cors'
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log('Add blog, response: ', res);

      dispatch({
        type: ADD_BLOG,
        blog: res.blog
      });
    });
  };
};

var deleteBlog = exports.deleteBlog = function deleteBlog(id) {
  fetch('http://localhost:3000/api/blogs/' + encodeURI(id), {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include'
  });

  return {
    type: DELETE_BLOG,
    _id: id
  };
};

var fetchBlogs = exports.fetchBlogs = function fetchBlogs() {
  return function (dispatch) {

    fetch('http://localhost:3000/api/blogs', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch({
        type: FETCH_BLOGS,
        blogs: res.blogs
      });
    });
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ADD_BLOG, "ADD_BLOG", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/actions/blogs.js");
  reactHotLoader.register(DELETE_BLOG, "DELETE_BLOG", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/actions/blogs.js");
  reactHotLoader.register(FETCH_BLOGS, "FETCH_BLOGS", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/actions/blogs.js");
  reactHotLoader.register(addBlog, "addBlog", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/actions/blogs.js");
  reactHotLoader.register(deleteBlog, "deleteBlog", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/actions/blogs.js");
  reactHotLoader.register(fetchBlogs, "fetchBlogs", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/actions/blogs.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var winston = __webpack_require__(23);

var logger = winston.createLogger({
  transports: [new winston.transports.Console({
    level: 'debug',
    handleExceptions: true
  }), new winston.transports.File({
    filename: 'debug.log',
    level: 'debug',
    handleExceptions: true
  })]
});

module.exports = logger;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(logger, 'logger', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/logger.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var getRequestURL = function getRequestURL(req) {
  return req.protocol + '://' + req.get('host') + req.originalUrl;
};

module.exports = getRequestURL;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getRequestURL, 'getRequestURL', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/utils/parseUrl.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, __dirname) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var express = __webpack_require__(5);
var path = __webpack_require__(18);
var mongoose = __webpack_require__(9);
var passport = __webpack_require__(10);
var session = __webpack_require__(19);
var LocalStrategy = __webpack_require__(6).Strategy;

var config = __webpack_require__(20);

// App's routes
var blogs_router = __webpack_require__(21);
var users_router = __webpack_require__(26);
var index_router = __webpack_require__(29);

var app = express();

app.use(express.static('dist'));

// MongoDB connection
mongoose.connect("mongodb://" + config.db.host + "/" + config.db.name);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connection was established!');
});

// Configure template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Configure passport
app.use(session({
  secret: 'butthead',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Initialize passport
var initPassport = __webpack_require__(57);
initPassport(passport);

// Enable taking data from req.body
app.use(express.json());

// Add routes to app
app.use('/', index_router);
app.use('/users', users_router);
app.use('/api/blogs', blogs_router);

// Handler for errors
app.use(function (req, res, next) {
  var err = new Error('Page wasn\'t found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {

  if (err.status === 400) {
    res.render('error', {
      message: err.message
    });
  }

  res.status(err.status || 500).send({ msg: err.message });
});

app.listen(config.port, function () {
  return console.log("Server is listening on port " + config.port);
});
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LocalStrategy, "LocalStrategy", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/app.js");
  reactHotLoader.register(app, "app", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/app.js");
  reactHotLoader.register(db, "db", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/app.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module), "/"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var config = {
  port: 3000,
  db: {
    host: 'localhost',
    name: 'blogs-app'
  }
};

module.exports = config;

// "blogs-app" - new name

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(config, 'config', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/config.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var express = __webpack_require__(5);
var blogsApiController = __webpack_require__(22);
var isAuthenticated = __webpack_require__(25);

var router = express.Router();

router.get('/', isAuthenticated, blogsApiController.getBlogs);

router.post('/', isAuthenticated, blogsApiController.createBlog);

router.delete('/:id', isAuthenticated, blogsApiController.deleteBlog);

module.exports = router;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, 'router', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/routes/blogs.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(13);
var getRequestURL = __webpack_require__(14);
var Blog = __webpack_require__(24);

exports.getBlogs = function (req, res, next) {
  Blog.find({}, function (err, blogs) {
    if (err) throw next(err);

    logger.log({
      level: 'debug',
      message: 'Get blogs',
      timestamp: new Date().toUTCString(),
      label: { params: req.query, url: getRequestURL(req) }
    });

    res.send({ blogs: blogs });
  });
};

exports.createBlog = function (req, res, next) {
  var blog = new Blog({
    author: req.body.author,
    text: req.body.text
  });

  blog.save(function (err, result) {
    if (err) throw next(err);

    logger.log({
      level: 'debug',
      message: 'Add new blog',
      timestamp: new Date().toUTCString(),
      label: { author: req.body.author, text: req.body.text, url: getRequestURL(req) }
    });

    res.send({ msg: 'New blog was added', blog: result });
  });
};

exports.deleteBlog = function (req, res, next) {
  logger.log({
    level: 'debug',
    message: 'Delete blog by id',
    timestamp: new Date().toUTCString(),
    label: { id: req.params.id, url: getRequestURL(req) }
  });

  Blog.findById(decodeURI(req.params.id), function (err, blog) {
    if (err) throw next(err);

    blog.remove(function (err) {
      if (err) throw next(err);

      res.send({ msg: 'Blog was deleted' });
    });
  });
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var mongoose = __webpack_require__(9);
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  author: String,
  text: String
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Schema, 'Schema', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/models/blog.js');
  reactHotLoader.register(blogSchema, 'blogSchema', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/models/blog.js');
  reactHotLoader.register(Blog, 'Blog', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/models/blog.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var isAuthenticated = function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();

  return res.send({
    succes: false,
    msg: 'User is not logged in'
  });
};

module.exports = isAuthenticated;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isAuthenticated, 'isAuthenticated', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/utils/authChecker.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var express = __webpack_require__(5);
var passport = __webpack_require__(10);
var usersApiController = __webpack_require__(27);

var router = express.Router();

// make signup action
router.post('/signup', passport.authenticate('signup'), usersApiController.doSignup);

// make signin action
router.post('/signin', passport.authenticate('signin'), usersApiController.doSignIn);

// make logout action
router.get('/logout', usersApiController.doLogOut);

module.exports = router;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, "router", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/routes/users.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(13);
var getRequestURL = __webpack_require__(14);
var passport = __webpack_require__(10);
var User = __webpack_require__(7);

// signup action
exports.doSignup = function (req, res, next) {

  logger.log({
    level: 'debug',
    message: 'Signup action',
    timestamp: new Date().toUTCString(),
    label: { url: getRequestURL(req), body: req.body }
  });

  res.status(200).json({
    success: true,
    msg: 'You have successfully signed up!',
    user: req.user
  });

  // return passport.authenticate('signup', (err, userData) => {
  //
  //   if (err) {
  //     return res.status(400).json({
  //       success: false,
  //       msg: err.message
  //     });
  //   }
  //
  //   return res.status(200).json({
  //     success: true,
  //     msg: 'You have successfully signed up! Now you should be able to log in',
  //     userSessionId: userData._id
  //   });
  //
  // })(req, res, next);
};

// signin page
/*exports.signin = function(req, res) {

  logger.log({
    level: 'debug',
    message: 'Redirect to login page',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req) }
  });

  res.send({ succes: true, msg: "Signin page" });
};*/

// signin action
exports.doSignIn = function (req, res, next) {

  logger.log({
    level: 'debug',
    message: 'Signin action',
    timestamp: new Date().toUTCString(),
    label: { url: getRequestURL(req), body: req.body }
  });

  res.status(200).json({
    success: true,
    msg: 'You have successfully signed in!',
    user: req.user
  });
};

// logout action
exports.doLogOut = function (req, res, next) {
  req.logout();
  req.session.destroy();
  res.clearCookie("connect.sid");

  res.status(200).json({
    success: true,
    msg: 'User have been successfully loged out!',
    user: null
  });
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("passport-local-mongoose");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, React) {

var _redux = __webpack_require__(15);

var _server = __webpack_require__(30);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(4);

var _index = __webpack_require__(31);

var _index2 = _interopRequireDefault(_index);

var _App = __webpack_require__(34);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

// var App
// var ReactDOMServer = require('react-dom/server');
var express = __webpack_require__(5);

var router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true), res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function (req, res, next) {
  // res.sendFile(__dirname + '../../dist/index.html');
  console.log('Get index page');
  handleRender(req, res);
});

function handleRender(req, res) {
  var store = (0, _redux.createStore)(_index2.default);

  var html = (0, _server.renderToString)(React.createElement(
    _reactRedux.Provider,
    { store: store },
    React.createElement(
      _reactRouterDom.StaticRouter,
      null,
      React.createElement(_App2.default, null)
    )
  ));

  var preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
};

function renderFullPage(html, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <meta http-equiv="X-UA-Compatible" content="ie=edge">\n      <link href="/dist/styles.css" rel="stylesheet">\n      <title>Simple react app</title>\n    </head>\n    <body>\n      <div class="app">' + html + '</div>\n\n      <script>\n        window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n      </script>\n      <script src="/dist/bundle.js"></script>\n    </body>\n    </html>\n  ';
}

module.exports = router;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, 'router', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/routes/index.js');
  reactHotLoader.register(handleRender, 'handleRender', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/routes/index.js');
  reactHotLoader.register(renderFullPage, 'renderFullPage', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/routes/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module), __webpack_require__(2)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(15);

var _blogs = __webpack_require__(32);

var _blogs2 = _interopRequireDefault(_blogs);

var _user = __webpack_require__(33);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var blogsApp = (0, _redux.combineReducers)({
  blogs: _blogs2.default,
  user: _user2.default
});

var _default = blogsApp;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(blogsApp, 'blogsApp', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/reducers/index.js');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/reducers/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blogs = __webpack_require__(11);

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _blogs.ADD_BLOG:
      {
        return [].concat(_toConsumableArray(state), [action.blog]);
      }
    case _blogs.DELETE_BLOG:
      {
        return state.filter(function (blog) {
          return blog._id !== action._id;
        });
      }
    case _blogs.FETCH_BLOGS:
      {
        return action.blogs;
      }
    default:
      {
        return state;
      }
  }
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/reducers/blogs.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(8);

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isLoggedIn: false, data: null };
  var action = arguments[1];

  switch (action.type) {
    case _user.SET_LOGGED_IN:
      {
        return {
          isLoggedIn: action.user ? true : false,
          data: action.user
        };
      }
    default:
      {
        return state;
      }
  }
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/reducers/user.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _AuthRoute = __webpack_require__(35);

var _AuthRoute2 = _interopRequireDefault(_AuthRoute);

var _Blogs = __webpack_require__(36);

var _Blogs2 = _interopRequireDefault(_Blogs);

var _Header = __webpack_require__(49);

var _Header2 = _interopRequireDefault(_Header);

var _Intro = __webpack_require__(51);

var _Intro2 = _interopRequireDefault(_Intro);

var _SignUp = __webpack_require__(53);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _SignIn = __webpack_require__(54);

var _SignIn2 = _interopRequireDefault(_SignIn);

__webpack_require__(55);

__webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'app__wrapper' },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Intro2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _SignUp2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _SignIn2.default }),
            _react2.default.createElement(_AuthRoute2.default, { path: '/blogs', component: _react2.default.createElement(_Blogs2.default, null) })
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return App;
}(_react2.default.Component);

// const mapStateToProps = state => ({
//   isLoggedIn: state.user.isLoggedIn
// });

// export default connect(mapStateToProps, null)(App);


var _default = App;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/app/App.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/app/App.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthRoute = function (_React$Component) {
  _inherits(AuthRoute, _React$Component);

  function AuthRoute(props) {
    _classCallCheck(this, AuthRoute);

    return _possibleConstructorReturn(this, (AuthRoute.__proto__ || Object.getPrototypeOf(AuthRoute)).call(this, props));
  }

  _createClass(AuthRoute, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactRouterDom.Route, { path: this.props.path, render: function render() {
          return _this2.props.isLoggedIn ? _this2.props.component : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
        } });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AuthRoute;
}(_react2.default.Component);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(AuthRoute);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthRoute, 'AuthRoute', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/authRoute/AuthRoute.jsx');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/authRoute/AuthRoute.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/authRoute/AuthRoute.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _blogs = __webpack_require__(11);

var _AddBlogBtn = __webpack_require__(37);

var _AddBlogBtn2 = _interopRequireDefault(_AddBlogBtn);

var _BlogsList = __webpack_require__(39);

var _BlogsList2 = _interopRequireDefault(_BlogsList);

var _CreateBlogForm = __webpack_require__(41);

var _CreateBlogForm2 = _interopRequireDefault(_CreateBlogForm);

var _Filter = __webpack_require__(43);

var _Filter2 = _interopRequireDefault(_Filter);

var _Overlay = __webpack_require__(45);

var _Overlay2 = _interopRequireDefault(_Overlay);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blogs = function (_React$Component) {
  _inherits(Blogs, _React$Component);

  function Blogs(props) {
    _classCallCheck(this, Blogs);

    var _this = _possibleConstructorReturn(this, (Blogs.__proto__ || Object.getPrototypeOf(Blogs)).call(this, props));

    _this.state = {
      blogs: _this.props.blogs,
      showPopup: false,
      searchValue: ''
    };

    _this.addBlog = _this.addBlog.bind(_this);
    _this.filterByAuthor = _this.filterByAuthor.bind(_this);
    _this.togglePopup = _this.togglePopup.bind(_this);
    return _this;
  }

  _createClass(Blogs, [{
    key: 'hidePopupOnEscKeyPress',
    value: function hidePopupOnEscKeyPress(event) {
      if (this.state.showPopup && event.keyCode === 27) {
        this.setState({
          showPopup: false
        });
      }
    }
  }, {
    key: 'addBlog',
    value: function addBlog(blog) {
      this.props.addBlog(blog);
    }
  }, {
    key: 'filterBlogsArray',
    value: function filterBlogsArray(blogs, searchVal) {
      return blogs.filter(function (blog, index) {
        return blog.author.toLowerCase().search(searchVal.toLowerCase()) !== -1;
      });
    }
  }, {
    key: 'filterByAuthor',
    value: function filterByAuthor(event) {
      var searchVal = event.target.value;

      if (searchVal.trim()) {

        var blogs = this.filterBlogsArray(this.props.blogs, searchVal);

        this.setState({
          blogs: blogs,
          searchVal: searchVal
        });
      } else {
        this.setState({
          blogs: this.props.blogs,
          searchVal: ''
        });
      }
    }
  }, {
    key: 'togglePopup',
    value: function togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.blogs !== nextProps.blogs) {
        this.setState({
          blogs: this.state.searchVal ? this.filterBlogsArray(nextProps.blogs, this.state.searchVal) : nextProps.blogs
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener("keydown", this.hidePopupOnEscKeyPress.bind(this), false);

      // make async request to get blogs from MongoDB
      this.props.fetchBlogs();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Simple blogs app'
        ),
        _react2.default.createElement(_AddBlogBtn2.default, { togglePopup: this.togglePopup }),
        _react2.default.createElement(_Filter2.default, { filterByAuthor: this.filterByAuthor, blogsLength: this.state.blogs.length }),
        _react2.default.createElement(_BlogsList2.default, { blogs: this.state.blogs, deleteBlog: this.props.deleteBlog }),
        this.state.showPopup && _react2.default.createElement(_Overlay2.default, { component: _react2.default.createElement(_CreateBlogForm2.default, { togglePopup: this.togglePopup }) })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Blogs;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    blogs: state.blogs
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchBlogs: function fetchBlogs() {
      dispatch((0, _blogs.fetchBlogs)());
    },
    deleteBlog: function deleteBlog(id) {
      dispatch((0, _blogs.deleteBlog)(id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Blogs);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Blogs, 'Blogs', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/blogs/Blogs.jsx');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/blogs/Blogs.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/blogs/Blogs.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/blogs/Blogs.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(props) {
  return _react2.default.createElement(
    'button',
    { className: 'add-blog-btn', onClick: props.togglePopup },
    '+'
  );
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/addBlogBtn/AddBlogBtn.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 38 */
/***/ (function(module, exports) {



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Blog = __webpack_require__(40);

var _Blog2 = _interopRequireDefault(_Blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

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

      return this.props.blogs.map(function (blog) {
        return _react2.default.createElement(_Blog2.default, { key: blog._id, data: blog, deleteBlog: _this2.props.deleteBlog });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'blogs' },
        this.renderBlogs()
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return BlogsList;
}(_react2.default.Component);

var _default = BlogsList;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlogsList, 'BlogsList', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/blogs/list/BlogsList.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/blogs/list/BlogsList.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(props) {

  var deleteBlog = function deleteBlog() {
    props.deleteBlog(props.data._id);
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
      props.data.text
    ),
    _react2.default.createElement(
      "button",
      { type: "button", className: "blogs__delete-btn", onClick: deleteBlog },
      "\u2A2F"
    )
  );
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/blogs/blog/Blog.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _blogs = __webpack_require__(11);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

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
      text: '',
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

      if (this.state.author.length === 0 || this.state.text.length === 0) {
        this.setState({
          showError: true
        });
      } else {
        this.props.addBlog({
          author: this.state.author,
          text: this.state.text
        });

        this.setState({
          author: '',
          text: '',
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
        text: event.target.value
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
          value: this.state.text,
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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return CreateBlogForm;
}(_react2.default.PureComponent);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addBlog: function addBlog(blog) {
      dispatch((0, _blogs.addBlog)(blog));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CreateBlogForm);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CreateBlogForm, 'CreateBlogForm', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/createBlog/CreateBlogForm.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/createBlog/CreateBlogForm.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/createBlog/CreateBlogForm.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

__webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

    _this.searchInput = {};

    _this.state = {
      showFilteringError: false
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
          onChange: this.props.filterByAuthor,
          className: 'filter__input',
          ref: function ref(input) {
            return _this2.searchInput = input;
          }
        }),
        !this.props.blogsLength && this.searchInput.value && _react2.default.createElement(
          'p',
          { className: 'filter__error' },
          'Nothing was found'
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Filter;
}(_react2.default.Component);

var _default = Filter;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Filter, 'Filter', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/filter/Filter.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/filter/Filter.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(props) {
  return _reactDom2.default.createPortal(_react2.default.createElement(
    'div',
    { className: 'overlay' },
    props.component
  ), document.querySelector("body"));
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/overlay/Overlay.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 47 */
/***/ (function(module, exports) {



/***/ }),
/* 48 */
/***/ (function(module, exports) {



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _user = __webpack_require__(8);

__webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.logOutHandler = _this.logOutHandler.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'logOutHandler',
    value: function logOutHandler(event) {
      var _this2 = this;

      event.preventDefault();

      fetch('http://localhost:3000/users/logout', {
        credentials: 'include'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        console.log('Logout handler: ', res);
        _this2.props.setLoggedIn(res.user);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'header__title', to: '/' },
          _react2.default.createElement(
            'h2',
            null,
            'React app'
          )
        ),
        _react2.default.createElement(
          'nav',
          { className: 'header__nav' },
          !this.props.isLoggedIn && _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'header__link', to: '/signin' },
            'Sign In'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'header__link', to: '/signup' },
            'Sign Up'
          ),
          this.props.isLoggedIn && _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'header__link', to: '/blogs' },
            'Blogs'
          ),
          this.props.isLoggedIn && _react2.default.createElement(
            'a',
            { className: 'header__link', href: '#', onClick: this.logOutHandler },
            'Log Out'
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Header;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.data
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setLoggedIn: function setLoggedIn(user) {
      dispatch((0, _user.setLoggedIn)(user));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/header/Header.jsx');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/header/Header.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/header/Header.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/header/Header.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports) {



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(props) {
  return _react2.default.createElement(
    'div',
    { className: 'intro' },
    _react2.default.createElement(
      'h1',
      { className: 'intro__title' },
      'Simple blogs app'
    ),
    _react2.default.createElement(
      'p',
      { className: 'intro__text' },
      'This is the home page'
    )
  );
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/intro/Intro.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports) {



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _user = __webpack_require__(8);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp(props) {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

    _this.inputLogin = {};
    _this.inputPass = {};

    _this.state = {
      showSignInError: false,
      disableElements: false,
      errorMsg: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.signUpRequest = _this.signUpRequest.bind(_this);
    return _this;
  }

  _createClass(SignUp, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      if (this.inputPass.value && this.inputLogin.value.trim()) {
        this.signUpRequest();
      } else {
        this.setState({
          showSignInError: true,
          errorMsg: 'Fill in all necessary fields'
        });
      }
    }
  }, {
    key: 'signUpRequest',
    value: function signUpRequest() {
      var _this2 = this;

      this.setState({
        disableElements: !this.state.disableElements,
        showSignInError: false
      });

      fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: this.inputLogin.value,
          password: this.inputPass.value
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {

        // res.success ? : this.errorResponseHandler(res.msg);

        if (res.success) {
          console.log('Success!!!');

          _this2.props.setLoggedIn(res.user);
          _this2.props.history.push('/blogs');
        } else {
          _this2.errorResponseHandler(res.msg);
        }
      }).catch(function (err) {
        _this2.errorResponseHandler(err.msg);
      });
    }
  }, {
    key: 'errorResponseHandler',
    value: function errorResponseHandler(msg) {
      this.setState({
        disableElements: !this.state.disableElements,
        showSignInError: true,
        errorMsg: msg
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'form',
        { className: 'auth-form', onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'h2',
          { className: 'auth-form__title' },
          'Sign Up'
        ),
        _react2.default.createElement('input', { className: 'auth-form__input',
          type: 'text',
          placeholder: 'Login',
          ref: function ref(input) {
            return _this3.inputLogin = input;
          },
          disable: this.state.disableElements ? 'true' : 'false'
        }),
        _react2.default.createElement('input', { className: 'auth-form__input',
          type: 'password',
          placeholder: 'Password',
          ref: function ref(input) {
            return _this3.inputPass = input;
          },
          disable: this.state.disableElements ? 'true' : 'false'
        }),
        _react2.default.createElement('input', { className: 'auth-form__submit',
          type: 'submit',
          value: 'Sign Up',
          disable: this.state.disableElements ? 'true' : 'false'
        }),
        this.state.showSignInError && _react2.default.createElement(
          'p',
          { className: 'auth-form__error' },
          this.state.errorMsg
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SignUp;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setLoggedIn: function setLoggedIn(user) {
      dispatch((0, _user.setLoggedIn)(user));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SignUp);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignUp, 'SignUp', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/auth/signup/SignUp.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/auth/signup/SignUp.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/auth/signup/SignUp.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(8);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(4);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_React$Component) {
  _inherits(SignIn, _React$Component);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));

    _this.inputLogin = {};
    _this.inputPass = {};

    _this.state = {
      showSignInError: false,
      disableElements: false,
      errorMsg: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.signInRequest = _this.signInRequest.bind(_this);
    return _this;
  }

  _createClass(SignIn, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      if (this.inputPass.value && this.inputLogin.value.trim()) {
        this.signInRequest();
      } else {
        this.setState({
          showSignInError: true,
          errorMsg: 'Fill in all necessary fields'
        });
      }
    }
  }, {
    key: 'signInRequest',
    value: function signInRequest() {
      var _this2 = this;

      this.setState({
        disableElements: !this.state.disableElements,
        showSignInError: false
      });

      fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: this.inputLogin.value,
          password: this.inputPass.value
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res.success) {
          _this2.props.setLoggedIn(res.user);
          _this2.props.history.push('/blogs');
        } else {
          _this2.errorResponseHandler(res.msg);
        }
      }).catch(function (err) {
        _this2.errorResponseHandler(err.message);
      });
    }
  }, {
    key: 'errorResponseHandler',
    value: function errorResponseHandler(msg) {
      this.setState({
        disableElements: !this.state.disableElements,
        showSignInError: true,
        errorMsg: msg
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'form',
        { className: 'auth-form', onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'h2',
          { className: 'auth-form__title' },
          'Sign In'
        ),
        _react2.default.createElement('input', { className: 'auth-form__input',
          type: 'text',
          placeholder: 'Login',
          ref: function ref(input) {
            return _this3.inputLogin = input;
          },
          disable: this.state.disableElements ? 'true' : 'false'
        }),
        _react2.default.createElement('input', { className: 'auth-form__input',
          type: 'password',
          placeholder: 'Password',
          ref: function ref(input) {
            return _this3.inputPass = input;
          },
          disable: this.state.disableElements ? 'true' : 'false'
        }),
        _react2.default.createElement('input', { className: 'auth-form__submit',
          type: 'submit',
          value: 'Sign In',
          disable: this.state.disableElements ? 'true' : 'false'
        }),
        this.state.showSignInError && _react2.default.createElement(
          'p',
          { className: 'auth-form__error' },
          this.state.errorMsg
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SignIn;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setLoggedIn: function setLoggedIn(user) {
      dispatch((0, _user.setLoggedIn)(user));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SignIn);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignIn, 'SignIn', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/auth/signin/SignIn.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/auth/signin/SignIn.jsx');
  reactHotLoader.register(_default, 'default', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/client/components/forms/auth/signin/SignIn.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, exports) {



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var signInUser = __webpack_require__(58);
var signUpUser = __webpack_require__(59);
var User = __webpack_require__(7);
var bCrypt = __webpack_require__(12);
var LocalStrategy = __webpack_require__(6).Strategy;

var initPassport = function initPassport(passport) {

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  signInUser(passport);
  signUpUser(passport);
};

module.exports = initPassport;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LocalStrategy, 'LocalStrategy', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/passport/init.js');
  reactHotLoader.register(initPassport, 'initPassport', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/passport/init.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var LocalStrategy = __webpack_require__(6).Strategy;
var User = __webpack_require__(7);
var bCrypt = __webpack_require__(12);

var isValidPassword = function isValidPassword(user, password) {
  return bCrypt.compareSync(password, user.password);
};

var signInUser = function signInUser(passport) {

  passport.use('signin', new LocalStrategy({
    passReqToCallback: true
  }, function (req, username, password, done) {
    // check in mongo if a user with username exists or not
    User.findOne({ 'username': username }, function (err, user) {
      // In case of any error, return using the done method
      if (err) return done(err);

      // Username does not exist, redirect back
      if (!user) {
        var _err = new Error("User doesn't exist");
        _err.name = 'IncorrectCredentialsError';

        return done(_err);
      }

      // User exists but wrong password, log the error
      if (!isValidPassword(user, password)) {
        var _err2 = new Error("Incorrect password");
        _err2.name = 'IncorrectCredentialsError';

        return done(_err2);
      }

      // User and password both match, return user from done method
      // which will be treated like success
      return done(null, user);
    });
  }));
};

module.exports = signInUser;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LocalStrategy, 'LocalStrategy', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/passport/signin.js');
  reactHotLoader.register(isValidPassword, 'isValidPassword', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/passport/signin.js');
  reactHotLoader.register(signInUser, 'signInUser', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/passport/signin.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
                var enterModule = __webpack_require__(0).enterModule;

                enterModule && enterModule(module);
})();

var LocalStrategy = __webpack_require__(6).Strategy;
var User = __webpack_require__(7);
var bCrypt = __webpack_require__(12);

var createHash = function createHash(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

var signUpUser = function signUpUser(passport) {

                passport.use('signup', new LocalStrategy({
                                passReqToCallback: true // allows us to pass back the entire request to the callback
                }, function (req, username, password, done) {
                                // find a user in Mongo with provided username
                                User.findOne({ 'username': username }, function (err, user) {

                                                // In case of any error, return using the done method
                                                if (err) return done(err);

                                                // User already exists
                                                if (user) {
                                                                var _err = new Error("User already exists");
                                                                _err.name = 'IncorrectCredentialsError';

                                                                return done(_err);
                                                }

                                                var newUser = new User();

                                                // set the user's local credentials
                                                newUser.username = username;
                                                newUser.password = createHash(password);

                                                // save the user
                                                return newUser.save(function (err, savedUser) {
                                                                if (err) return done(err);

                                                                console.log('User was saved: ', savedUser);
                                                                return done(null, savedUser);
                                                });
                                });
                }));
};

module.exports = signUpUser;
;

(function () {
                var reactHotLoader = __webpack_require__(0).default;

                var leaveModule = __webpack_require__(0).leaveModule;

                if (!reactHotLoader) {
                                return;
                }

                reactHotLoader.register(LocalStrategy, 'LocalStrategy', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/passport/signup.js');
                reactHotLoader.register(createHash, 'createHash', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/passport/signup.js');
                reactHotLoader.register(signUpUser, 'signUpUser', 'D:/FrontCamp/anton-paskanny.github.io/FrontCamp/react/part2/app/server/passport/signup.js');
                leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ })
/******/ ]);