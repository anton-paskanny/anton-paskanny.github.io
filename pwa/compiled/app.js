"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*

Config

*/
var configAPI = {
  apiKey: '88323f990dab404cb1369f23f88a2053',
  urlPrefix: 'https://newsapi.org/v2',
  topHeadlinesParam: 'top-headlines',
  sourcesParam: 'sources',
  defaultSources: ['bbc-news', 'bbc-sport']
  /*
  
  Components
  
  */

};

var Footer =
/*#__PURE__*/
function () {
  function Footer() {
    _classCallCheck(this, Footer);

    this.footer = this.createComponent();
  }

  _createClass(Footer, [{
    key: "createComponent",
    value: function createComponent() {
      return document.createElement('footer');
    }
  }, {
    key: "build",
    value: function build() {
      this.footer.className = 'footer';
      this.footer.innerHTML = '<p>Powered by <a href="https://newsapi.org/" title="NewsAPI">NewsAPI.org</a></p>';
      return this;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.footer;
    }
  }]);

  return Footer;
}();

var NewsList =
/*#__PURE__*/
function () {
  function NewsList() {
    _classCallCheck(this, NewsList);

    this.newsComponent = this.createComponent();
    this.newsArticles = null;
  }

  _createClass(NewsList, [{
    key: "createComponent",
    value: function createComponent() {
      return document.createElement('div');
    }
  }, {
    key: "getNews",
    value: function getNews(articles) {
      var _this2 = this;

      return articles.map(function (article) {
        return "<article class=\"news-article\">\n              ".concat(article.urlToImage ? "<img class=\"news-article__img\" src=".concat(article.urlToImage, " alt='").concat(article.title, "'>") : '<div class="news-article__img"></div>', "\n              <div class=\"news-article__text-content\">\n                <h2 class=\"news-article__title\">").concat(article.title, "</h2>\n                <p class=\"news-article__info-line\">\n                  <span class=\"news-article__info-item\">\n                    <img class=\"news-article__info-icon\" src=\"./img/news.svg\" alt=\"Source icon\">\n                    ").concat(article.source.name, "\n                  </span>\n                  ").concat(article.publishedAt ? "<span class=\"news-article__info-item\">\n                        <img class=\"news-article__info-icon\" src=\"./img/calendar.svg\" alt=\"Calendar icon\">\n                        ".concat(_this2.transformPublishedDate(article.publishedAt), "\n                     </span>") : '', "\n                </p>\n                ").concat(article.description ? "<p class=\"news-article__desc\">".concat(article.description, "</p>") : '', "\n                <a class=\"news-article__link\" href=").concat(article.url, " target=\"_blank\" title=\"").concat(article.title, "...read more\">Read more</a>\n              </div>\n       </article>");
      }).join('');
    }
  }, {
    key: "transformPublishedDate",
    value: function transformPublishedDate(date) {
      var newDate = new Date(date);
      return newDate.toLocaleString();
    }
  }, {
    key: "build",
    value: function build(articles) {
      this.newsArticles = this.getNews(articles);
      this.newsComponent.className = 'news-wrapper';
      this.newsComponent.innerHTML = this.newsArticles;
      return this;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.newsComponent;
    }
  }, {
    key: "updateComponent",
    value: function updateComponent(articles) {
      var newsItems = this.getNews(articles);

      if (this.newsArticles !== newsItems) {
        this.newsArticles = newsItems;
        this.newsComponent.innerHTML = this.newsArticles;
      }
    }
  }]);

  return NewsList;
}();

var PageContent =
/*#__PURE__*/
function () {
  function PageContent() {
    _classCallCheck(this, PageContent);

    this.pageContent = this.createComponent();
  }

  _createClass(PageContent, [{
    key: "createComponent",
    value: function createComponent() {
      return document.createElement('section');
    }
  }, {
    key: "build",
    value: function build(component) {
      this.pageContent.className = 'page-content';
      this.pageContent.append(component);
      return this;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.pageContent;
    }
  }]);

  return PageContent;
}();

var Sidebar =
/*#__PURE__*/
function () {
  function Sidebar() {
    _classCallCheck(this, Sidebar);

    this.sidebar = this.createComponent();
    this.sidebarTitle = this.createTitle();
    this.offlineHintText = 'Internet connection is lost. Last received news are shown. News sources are disabled.';
  }

  _createClass(Sidebar, [{
    key: "createComponent",
    value: function createComponent() {
      return document.createElement('aside');
    }
  }, {
    key: "createTitle",
    value: function createTitle() {
      return document.createElement('h3');
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.sidebar;
    }
  }, {
    key: "build",
    value: function build(component) {
      this.sidebar.className = 'sidebar';
      this.sidebarTitle.className = 'sidebar__title';
      this.sidebarTitle.textContent = 'News Source filter';
      this.sidebar.append(this.sidebarTitle);

      if (!window.navigator.onLine) {
        this.sidebarTitle.innerHTML = this.sidebarTitle.innerHTML + "<p>".concat(this.offlineHintText, "</p>");
      }

      this.sidebar.append(component);
      return this;
    }
  }, {
    key: "changeSidebarView",
    value: function changeSidebarView() {
      this.sidebar.classList.contains('sidebar--opened') ? this.sidebar.classList.remove('sidebar--opened') : this.sidebar.classList.add('sidebar--opened');
    }
  }]);

  return Sidebar;
}();

var SourcesList =
/*#__PURE__*/
function () {
  function SourcesList() {
    _classCallCheck(this, SourcesList);

    this.wrapper = this.createComponentWrapper();
    this.list = this.createComponent();
    this.sourceItemDelay = 1300;
  }

  _createClass(SourcesList, [{
    key: "createComponent",
    value: function createComponent() {
      return document.createElement('ul');
    }
  }, {
    key: "createComponentWrapper",
    value: function createComponentWrapper() {
      return document.createElement('div');
    }
  }, {
    key: "getListItems",
    value: function getListItems(sources) {
      var isOffline = !window.navigator.onLine;
      var initSources = isOffline && localStorage.getItem('lastSources') || configAPI.defaultSources;
      return sources.map(function (elem) {
        return "<li class=\"filter__item\">\n        <label class=\"filter__label\">\n          <input class=\"filter__input\" type=\"checkbox\"\n            value=".concat(elem.id, "\n            ").concat(isOffline && 'disabled', "\n            ").concat(initSources.includes(elem.id) && 'checked', "\n          >\n          <span class=\"filter__checkbox\"></span>\n          <span class=\"filter__text\">").concat(elem.name, "</span>\n        </label>\n      </li>");
      }).join('');
    }
  }, {
    key: "build",
    value: function build(sources) {
      this.list.className = 'filter__list';
      this.wrapper.className = 'filter';
      this.list.innerHTML = this.getListItems(sources);
      this.wrapper.append(this.list);
      return this;
    }
  }, {
    key: "getComponent",
    value: function getComponent(sources) {
      return this.wrapper;
    }
  }, {
    key: "initCheckboxHandler",
    value: function initCheckboxHandler(_ref) {
      var _this3 = this;

      var getTopHeadlinesNews = _ref.getTopHeadlinesNews,
          updateNewsList = _ref.updateNewsList,
          toggleSpinner = _ref.toggleSpinner;
      var timer = null;
      this.list.addEventListener('click', function (e) {
        if (timer) {
          clearTimeout(timer);
        }

        ;
        timer = setTimeout(function () {
          // check if click was made on input tag
          if (e.target.tagName === 'INPUT') {
            // get all checked values from sources list
            var checkedValues = _this3.getAllCheckedValues(); // show spinner as we are going to fetch data


            toggleSpinner(); // fetch top headlines news for checked sources

            getTopHeadlinesNews(checkedValues).then(function (articles) {
              // re-render news-list component with new data
              updateNewsList(articles); // hide spinner as we have already downloaded data

              setTimeout(function () {
                toggleSpinner();
              }, 1000);
            });
          }
        }, _this3.sourceItemDelay);
      });
    }
  }, {
    key: "getAllCheckedValues",
    value: function getAllCheckedValues() {
      var checkedValues = [];
      Array.prototype.forEach.call(this.list.querySelectorAll('input:checked'), function (elem) {
        checkedValues.push(elem.value);
      });
      return checkedValues.join(',');
    }
  }]);

  return SourcesList;
}();

var Spinner =
/*#__PURE__*/
function () {
  function Spinner() {
    _classCallCheck(this, Spinner);

    this.spinner = this.createComponent();
  }

  _createClass(Spinner, [{
    key: "createComponent",
    value: function createComponent() {
      return document.createElement('div');
    }
  }, {
    key: "build",
    value: function build() {
      this.spinner.className = 'spinner';
      this.spinner.innerHTML = '<img class="spinner__img" src="./img/spinner.svg">';
      return this;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.spinner;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.spinner.classList.contains('spinner--show') ? this.spinner.classList.remove('spinner--show') : this.spinner.classList.add('spinner--show');
    }
  }]);

  return Spinner;
}();

var ToggleBtn =
/*#__PURE__*/
function () {
  function ToggleBtn() {
    _classCallCheck(this, ToggleBtn);

    this.toggleBtn = this.createComponent();
    this.filterBtn = this.toggleBtn.querySelector('.icon.filter');
    this.closeBtn = this.toggleBtn.querySelector('.icon.close');
    this.btnState = {
      isClosed: false
    };
  }

  _createClass(ToggleBtn, [{
    key: "createComponent",
    value: function createComponent() {
      return document.createElement('button');
    }
  }, {
    key: "build",
    value: function build() {
      this.toggleBtn.className = 'toggle-btn';
      this.toggleBtn.innerHTML = '<svg class="icon filter isActive"><use xlink:href="#filter" /></svg><svg class="icon close"><use xlink:href="#close-button" /></svg>';
      this.filterBtn = this.toggleBtn.querySelector('.icon.filter');
      this.closeBtn = this.toggleBtn.querySelector('.icon.close');
      return this;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.toggleBtn;
    }
  }, {
    key: "initToggleBtnHandler",
    value: function initToggleBtnHandler(handler) {
      var _this = this;

      this.toggleBtn.addEventListener('click', function () {
        console.log('_this: ', _this);

        if (_this.filterBtn.classList.contains('isActive')) {
          _this.filterBtn.classList.remove('isActive');

          _this.closeBtn.classList.add('isActive');
        } else {
          _this.filterBtn.classList.add('isActive');

          _this.closeBtn.classList.remove('isActive');
        }
      }); // Pass sidebar handler to control left panel with cources

      this.toggleBtn.addEventListener('click', handler);
    }
  }]);

  return ToggleBtn;
}();
/*

Services

*/


var RequestsService =
/*#__PURE__*/
function () {
  function RequestsService() {
    _classCallCheck(this, RequestsService);

    this.apiKey = configAPI.apiKey;
    this.urlPrefix = configAPI.urlPrefix;
    this.topHeadlinesParam = configAPI.topHeadlinesParam;
    this.sourcesParam = configAPI.sourcesParam;
    this.defaultSources = configAPI.defaultSources;
  }

  _createClass(RequestsService, [{
    key: "getTopHeadlinesURL",
    value: function getTopHeadlinesURL(sources) {
      var sourcesList = sources ? sources : this.defaultSources.join(',');

      if (!window.navigator.onLine) {
        sourcesList = localStorage.getItem('lastSources');
      }

      localStorage.setItem('lastSources', sourcesList);
      return "".concat(this.urlPrefix, "/").concat(this.topHeadlinesParam, "?sources=").concat(sourcesList, "&apiKey=").concat(this.apiKey);
    }
  }, {
    key: "getNewsSourcesURL",
    value: function getNewsSourcesURL() {
      return "".concat(this.urlPrefix, "/").concat(this.sourcesParam, "?apiKey=").concat(this.apiKey);
    }
  }, {
    key: "getTopHeadlinesNews",
    value: function () {
      var _getTopHeadlinesNews = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(sources) {
        var url, response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.getTopHeadlinesURL(sources);
                console.log("getTopHeadlinesNews url: ", url);
                _context.next = 4;
                return fetch(url);

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                data = _context.sent;
                return _context.abrupt("return", data.articles);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTopHeadlinesNews(_x) {
        return _getTopHeadlinesNews.apply(this, arguments);
      };
    }()
  }, {
    key: "getNewsSources",
    value: function () {
      var _getNewsSources = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var url, response, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this.getNewsSourcesURL();
                _context2.next = 3;
                return fetch(url);

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();

              case 6:
                data = _context2.sent;
                return _context2.abrupt("return", data.sources);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getNewsSources() {
        return _getNewsSources.apply(this, arguments);
      };
    }()
  }]);

  return RequestsService;
}();
/*

App

*/


var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.appElement = document.querySelector('.root');
    this.sidebar = new Sidebar();
    this.spinner = new Spinner();
    this.pageContent = new PageContent();
    this.sourcesList = new SourcesList();
    this.newsList = new NewsList();
    this.toggleBtn = new ToggleBtn();
    this.footer = new Footer();
    this.requestsService = new RequestsService();
    this.hideSpinnerDelay = 1000;
  }

  _createClass(App, [{
    key: "initEventHandlers",
    value: function initEventHandlers() {
      this.sourcesList.initCheckboxHandler(this.getEventHandlersCallbacks());
      this.toggleBtn.initToggleBtnHandler(this.sidebar.changeSidebarView.bind(this.sidebar));
    }
  }, {
    key: "build",
    value: function build(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          articles = _ref3[0],
          sources = _ref3[1];

      var newsListComponent = this.newsList.build(articles).getComponent();
      var pageContentComponent = this.pageContent.build(newsListComponent).getComponent();
      var sourcesListComponent = this.sourcesList.build(sources).getComponent();
      var sidebarComponent = this.sidebar.build(sourcesListComponent).getComponent();
      var toggleBtnComponent = this.toggleBtn.build().getComponent();
      var footerComponent = this.footer.build().getComponent();
      pageContentComponent.append(footerComponent);
      this.appElement.append(toggleBtnComponent);
      this.appElement.append(sidebarComponent);
      this.appElement.append(pageContentComponent);
    }
  }, {
    key: "showSpinner",
    value: function showSpinner() {
      this.appElement.append(this.spinner.build().getComponent());
      this.spinner.toggle();
    }
  }, {
    key: "hideSpinner",
    value: function hideSpinner() {
      var _this4 = this;

      setTimeout(function () {
        _this4.spinner.toggle();
      }, this.hideSpinnerDelay);
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      return Promise.all([this.requestsService.getTopHeadlinesNews(), this.requestsService.getNewsSources()]);
    }
  }, {
    key: "getEventHandlersCallbacks",
    value: function getEventHandlersCallbacks() {
      return {
        getTopHeadlinesNews: this.requestsService.getTopHeadlinesNews.bind(this.requestsService),
        updateNewsList: this.newsList.updateComponent.bind(this.newsList),
        toggleSpinner: this.spinner.toggle.bind(this.spinner)
      };
    }
  }, {
    key: "init",
    value: function init() {
      var _this5 = this;

      this.showSpinner();
      this.fetchData().then(function (data) {
        _this5.initEventHandlers(data);

        _this5.build(data);

        _this5.hideSpinner();
      });
    }
  }]);

  return App;
}();

var myApp = new App();
myApp.init();