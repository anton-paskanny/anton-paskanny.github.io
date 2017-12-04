'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

Config

*/

var configAPI = {
  apiKey: '88323f990dab404cb1369f23f88a2053',
  urlPrefix: 'https://newsapi.org/v2',
  topHeadlinesParam: 'top-headlines',
  sourcesParam: 'sources',
  defaultSources: ['bbc-news', 'cnn', 'the-telegraph']

  /*
  
  Components
  
  */

};
var Footer = function () {
  function Footer() {
    _classCallCheck(this, Footer);

    this.footer = this.createComponent();
  }

  _createClass(Footer, [{
    key: 'createComponent',
    value: function createComponent() {
      return document.createElement('footer');
    }
  }, {
    key: 'build',
    value: function build() {
      this.footer.className = 'footer';
      this.footer.innerHTML = '<p>Powered by <a href="https://newsapi.org/" title="NewsAPI">NewsAPI.org</a></p>';

      return this;
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return this.footer;
    }
  }]);

  return Footer;
}();

var NewsList = function () {
  function NewsList() {
    _classCallCheck(this, NewsList);

    this.newsComponent = this.createComponent();
    this.newsArticles = null;
  }

  _createClass(NewsList, [{
    key: 'createComponent',
    value: function createComponent() {
      return document.createElement('div');
    }
  }, {
    key: 'getNews',
    value: function getNews(articles) {
      var _this = this;

      return articles.map(function (article) {
        return '<article class="news-article">\n              ' + (article.urlToImage ? '<img class="news-article__img" src=' + article.urlToImage + ' alt=\'' + article.title + '\'>' : '<div class="news-article__img"></div>') + '\n              <div class="news-article__text-content">\n                <h2 class="news-article__title">' + article.title + '</h2>\n                <p class="news-article__info-line">\n                  ' + (article.author ? '<span class="news-article__info-item">\n                      <img class="news-article__info-icon" src="./img/news.svg" alt="Source icon"> ' + article.author + '\n                    </span>' : '') + '\n                  ' + (article.publishedAt ? '<span class="news-article__info-item">\n                        <img class="news-article__info-icon" src="./img/calendar.svg" alt="Calendar icon">\n                        ' + _this.transformPublishedDate(article.publishedAt) + '\n                     </span>' : '') + '\n                </p>\n                ' + (article.description ? '<p class="news-article__desc">' + article.description + '</p>' : '') + '\n                <a class="news-article__link" href=' + article.url + ' target="_blank" title="' + article.title + '...read more">Read more</a>\n              </div>\n       </article>';
      }).join('');
    }
  }, {
    key: 'transformPublishedDate',
    value: function transformPublishedDate(date) {
      var newDate = new Date(date);

      return newDate.toLocaleString();
    }
  }, {
    key: 'build',
    value: function build(articles) {
      this.newsArticles = this.getNews(articles);
      this.newsComponent.className = 'news-wrapper';
      this.newsComponent.innerHTML = this.newsArticles;

      return this;
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return this.newsComponent;
    }
  }, {
    key: 'updateComponent',
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

var PageContent = function () {
  function PageContent() {
    _classCallCheck(this, PageContent);

    this.pageContent = this.createComponent();
  }

  _createClass(PageContent, [{
    key: 'createComponent',
    value: function createComponent() {
      return document.createElement('section');
    }
  }, {
    key: 'build',
    value: function build(component) {
      this.pageContent.className = 'page-content';
      this.pageContent.appendChild(component);

      return this;
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return this.pageContent;
    }
  }]);

  return PageContent;
}();

var Sidebar = function () {
  function Sidebar() {
    _classCallCheck(this, Sidebar);

    this.sidebar = this.createComponent();
    this.sidebarTitle = this.createTitle();
  }

  _createClass(Sidebar, [{
    key: 'createComponent',
    value: function createComponent() {
      return document.createElement('aside');
    }
  }, {
    key: 'createTitle',
    value: function createTitle() {
      return document.createElement('h3');
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return this.sidebar;
    }
  }, {
    key: 'build',
    value: function build(component) {
      this.sidebar.className = 'sidebar';
      this.sidebarTitle.className = 'sidebar__title';
      this.sidebarTitle.textContent = 'News Source filter';

      this.sidebar.appendChild(this.sidebarTitle);
      this.sidebar.appendChild(component);

      return this;
    }
  }, {
    key: 'changeSidebarView',
    value: function changeSidebarView() {
      this.sidebar.classList.contains('sidebar--opened') ? this.sidebar.classList.remove('sidebar--opened') : this.sidebar.classList.add('sidebar--opened');
    }
  }]);

  return Sidebar;
}();

var SourcesList = function () {
  function SourcesList() {
    _classCallCheck(this, SourcesList);

    this.wrapper = this.createComponentWrapper();
    this.list = this.createComponent();
    this.sourceItemDelay = 1300;
  }

  _createClass(SourcesList, [{
    key: 'createComponent',
    value: function createComponent() {
      return document.createElement('ul');
    }
  }, {
    key: 'createComponentWrapper',
    value: function createComponentWrapper() {
      return document.createElement('div');
    }
  }, {
    key: 'getListItems',
    value: function getListItems(sources) {
      return sources.map(function (elem) {
        return '<li class="filter__item">\n        <label class="filter__label">\n          <input class="filter__input" type="checkbox" value=' + elem.id + '>\n          <span class="filter__checkbox"></span>\n          <span class="filter__text">' + elem.name + '</span>\n        </label>\n      </li>';
      }).join('');
    }
  }, {
    key: 'build',
    value: function build(sources) {
      this.list.className = 'filter__list';
      this.wrapper.className = 'filter';
      this.list.innerHTML = this.getListItems(sources);
      this.wrapper.appendChild(this.list);

      return this;
    }
  }, {
    key: 'getComponent',
    value: function getComponent(sources) {
      return this.wrapper;
    }
  }, {
    key: 'initCheckboxHandler',
    value: function initCheckboxHandler(_ref) {
      var _this2 = this;

      var getTopHeadlinesNews = _ref.getTopHeadlinesNews,
          updateNewsList = _ref.updateNewsList,
          toggleSpinner = _ref.toggleSpinner;

      var timer = null;

      this.list.addEventListener('click', function (e) {

        if (timer) {
          clearTimeout(timer);
        };

        timer = setTimeout(function () {
          // check if click was made on input tag
          if (e.target.tagName === 'INPUT') {

            // get all checked values from sources list
            var checkedValues = _this2.getAllCheckedValues();

            // show spinner as we are going to fetch data
            toggleSpinner();

            // fetch top headlines news for checked sources
            getTopHeadlinesNews(checkedValues).then(function (articles) {

              // re-render news-list component with new data
              updateNewsList(articles);

              // hide spinner as we have already downloaded data
              setTimeout(function () {
                toggleSpinner();
              }, 1000);
            });
          }
        }, _this2.sourceItemDelay);
      });
    }
  }, {
    key: 'getAllCheckedValues',
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

var Spinner = function () {
  function Spinner() {
    _classCallCheck(this, Spinner);

    this.spinner = this.createComponent();
  }

  _createClass(Spinner, [{
    key: 'createComponent',
    value: function createComponent() {
      return document.createElement('div');
    }
  }, {
    key: 'build',
    value: function build() {
      this.spinner.className = 'spinner';
      this.spinner.innerHTML = '<img class="spinner__img" src="./img/spinner.svg">';

      return this;
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return this.spinner;
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.spinner.classList.contains('spinner--show') ? this.spinner.classList.remove('spinner--show') : this.spinner.classList.add('spinner--show');
    }
  }]);

  return Spinner;
}();

var ToggleBtn = function () {
  function ToggleBtn() {
    _classCallCheck(this, ToggleBtn);

    this.toggleBtn = this.createComponent();
  }

  _createClass(ToggleBtn, [{
    key: 'createComponent',
    value: function createComponent() {
      return document.createElement('button');
    }
  }, {
    key: 'build',
    value: function build() {
      this.toggleBtn.className = 'toggle-btn';
      this.toggleBtn.innerHTML = '<span class="toggle-btn__line"></span>'.repeat(3);

      return this;
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return this.toggleBtn;
    }
  }, {
    key: 'initToggleBtnHandler',
    value: function initToggleBtnHandler(handler) {
      this.toggleBtn.addEventListener('click', handler);
    }
  }]);

  return ToggleBtn;
}();

/*

Services

*/


var RequestsService = function () {
  function RequestsService() {
    _classCallCheck(this, RequestsService);

    this.apiKey = configAPI.apiKey;
    this.urlPrefix = configAPI.urlPrefix;
    this.topHeadlinesParam = configAPI.topHeadlinesParam;
    this.sourcesParam = configAPI.sourcesParam;
    this.defaultSources = configAPI.defaultSources;
  }

  _createClass(RequestsService, [{
    key: 'getTopHeadlinesURL',
    value: function getTopHeadlinesURL(sources) {
      var sourcesList = sources ? sources : this.defaultSources.join(',');

      return this.urlPrefix + '/' + this.topHeadlinesParam + '?sources=' + sourcesList + '&apiKey=' + this.apiKey;
    }
  }, {
    key: 'getNewsSourcesURL',
    value: function getNewsSourcesURL() {
      return this.urlPrefix + '/' + this.sourcesParam + '?apiKey=' + this.apiKey;
    }
  }, {
    key: 'getTopHeadlinesNews',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sources) {
        var url, response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.getTopHeadlinesURL(sources);
                _context.next = 3;
                return fetch(url);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                data = _context.sent;
                return _context.abrupt('return', data.articles);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTopHeadlinesNews(_x) {
        return _ref2.apply(this, arguments);
      }

      return getTopHeadlinesNews;
    }()
  }, {
    key: 'getNewsSources',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
                return _context2.abrupt('return', data.sources);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getNewsSources() {
        return _ref3.apply(this, arguments);
      }

      return getNewsSources;
    }()
  }]);

  return RequestsService;
}();

/*

App

*/

var App = function () {
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
    key: 'initEventHandlers',
    value: function initEventHandlers() {
      this.sourcesList.initCheckboxHandler(this.getEventHandlersCallbacks());
      this.toggleBtn.initToggleBtnHandler(this.sidebar.changeSidebarView.bind(this.sidebar));
    }
  }, {
    key: 'build',
    value: function build(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          articles = _ref5[0],
          sources = _ref5[1];

      var newsListComponent = this.newsList.build(articles).getComponent();
      var pageContentComponent = this.pageContent.build(newsListComponent).getComponent();
      var sourcesListComponent = this.sourcesList.build(sources).getComponent();
      var sidebarComponent = this.sidebar.build(sourcesListComponent).getComponent();
      var toggleBtnComponent = this.toggleBtn.build().getComponent();
      var footerComponent = this.footer.build().getComponent();

      pageContentComponent.appendChild(footerComponent);

      this.appElement.appendChild(toggleBtnComponent);
      this.appElement.appendChild(sidebarComponent);
      this.appElement.appendChild(pageContentComponent);
    }
  }, {
    key: 'showSpinner',
    value: function showSpinner() {
      this.appElement.appendChild(this.spinner.build().getComponent());
      this.spinner.toggle();
    }
  }, {
    key: 'hideSpinner',
    value: function hideSpinner() {
      var _this3 = this;

      setTimeout(function () {
        _this3.spinner.toggle();
      }, this.hideSpinnerDelay);
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      return Promise.all([this.requestsService.getTopHeadlinesNews(), this.requestsService.getNewsSources()]);
    }
  }, {
    key: 'getEventHandlersCallbacks',
    value: function getEventHandlersCallbacks() {
      return {
        getTopHeadlinesNews: this.requestsService.getTopHeadlinesNews.bind(this.requestsService),
        updateNewsList: this.newsList.updateComponent.bind(this.newsList),
        toggleSpinner: this.spinner.toggle.bind(this.spinner)
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this4 = this;

      this.showSpinner();

      this.fetchData().then(function (data) {
        _this4.initEventHandlers(data);
        _this4.build(data);
        _this4.hideSpinner();
      });
    }
  }]);

  return App;
}();

var myApp = new App();
myApp.init();