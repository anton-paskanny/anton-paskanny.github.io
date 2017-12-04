/*

Config

*/

const configAPI = {
  apiKey: '88323f990dab404cb1369f23f88a2053',
  urlPrefix: 'https://newsapi.org/v2',
  topHeadlinesParam: 'top-headlines',
  sourcesParam: 'sources',
  defaultSources: [
    'bbc-news',
    'cnn',
    'the-telegraph'
  ]
}


/*

Components

*/

class Footer {
  constructor() {
    this.footer = this.createComponent();
  }
  createComponent() {
    return document.createElement('footer');
  }
  build() {
    this.footer.className = 'footer';
    this.footer.innerHTML = '<p>Powered by <a href="https://newsapi.org/" title="NewsAPI">NewsAPI.org</a></p>';

    return this;
  }
  getComponent() {
    return this.footer;
  }
}
class NewsList {
  constructor() {
    this.newsComponent = this.createComponent();
    this.newsArticles = null;
  }
  createComponent() {
    return document.createElement('div');
  }
  getNews(articles) {
    return articles.map(article => (
        `<article class="news-article">
              ${article.urlToImage ?
                `<img class="news-article__img" src=${article.urlToImage} alt='${article.title}'>`
                : '<div class="news-article__img"></div>'
              }
              <div class="news-article__text-content">
                <h2 class="news-article__title">${article.title}</h2>
                <p class="news-article__info-line">
                  ${article.author ?
                    `<span class="news-article__info-item">
                      <img class="news-article__info-icon" src="./img/news.svg" alt="Source icon"> ${article.author}
                    </span>` : ''
                  }
                  ${article.publishedAt ?
                    `<span class="news-article__info-item">
                        <img class="news-article__info-icon" src="./img/calendar.svg" alt="Calendar icon">
                        ${this.transformPublishedDate(article.publishedAt)}
                     </span>` : ''
                  }
                </p>
                ${article.description ? `<p class="news-article__desc">${article.description}</p>` : ''}
                <a class="news-article__link" href=${article.url} target="_blank" title="${article.title}...read more">Read more</a>
              </div>
       </article>`
    )).join('');
  };
  transformPublishedDate(date) {
    const newDate = new Date(date);

    return newDate.toLocaleString();
  }
  build(articles) {
    this.newsArticles = this.getNews(articles);
    this.newsComponent.className = 'news-wrapper';
    this.newsComponent.innerHTML = this.newsArticles;

    return this;
  }
  getComponent() {
    return this.newsComponent;
  }
  updateComponent(articles) {
    const newsItems = this.getNews(articles);

    if (this.newsArticles !== newsItems) {
      this.newsArticles = newsItems;
      this.newsComponent.innerHTML = this.newsArticles;
    }
  }
}
class PageContent {
  constructor() {
    this.pageContent = this.createComponent();
  }
  createComponent() {
    return document.createElement('section');
  }
  build(component) {
    this.pageContent.className = 'page-content';
    this.pageContent.appendChild(component);

    return this;
  }
  getComponent() {
    return this.pageContent;
  }
}
class Sidebar {
  constructor() {
    this.sidebar = this.createComponent();
    this.sidebarTitle = this.createTitle();
  }
  createComponent() {
    return document.createElement('aside');
  }
  createTitle() {
    return document.createElement('h3');
  }
  getComponent() {
    return this.sidebar;
  }
  build(component) {
    this.sidebar.className = 'sidebar';
    this.sidebarTitle.className = 'sidebar__title';
    this.sidebarTitle.textContent = 'News Source filter';

    this.sidebar.appendChild(this.sidebarTitle);
    this.sidebar.appendChild(component);

    return this;
  }
  changeSidebarView() {
    this.sidebar.classList.contains('sidebar--opened') ? this.sidebar.classList.remove('sidebar--opened') : this.sidebar.classList.add('sidebar--opened');
  }
}
class SourcesList {
  constructor() {
    this.wrapper = this.createComponentWrapper();
    this.list = this.createComponent();
    this.sourceItemDelay = 1300;
  }
  createComponent() {
    return document.createElement('ul');
  }
  createComponentWrapper() {
    return document.createElement('div');
  }
  getListItems(sources) {
    return sources.map(elem => (
      `<li class="filter__item">
        <label class="filter__label">
          <input class="filter__input" type="checkbox" value=${elem.id}>
          <span class="filter__checkbox"></span>
          <span class="filter__text">${elem.name}</span>
        </label>
      </li>`
    )).join('');
  }
  build(sources) {
    this.list.className = 'filter__list';
    this.wrapper.className = 'filter';
    this.list.innerHTML = this.getListItems(sources);
    this.wrapper.appendChild(this.list);

    return this;
  }
  getComponent(sources) {
    return this.wrapper;
  }
  initCheckboxHandler({getTopHeadlinesNews, updateNewsList, toggleSpinner}) {
    let timer = null;

    this.list.addEventListener('click', (e) => {

      if (timer) {
        clearTimeout(timer);
      };

       timer = setTimeout(() => {
         // check if click was made on input tag
         if (e.target.tagName === 'INPUT') {

           // get all checked values from sources list
           const checkedValues = this.getAllCheckedValues();

           // show spinner as we are going to fetch data
           toggleSpinner();

           // fetch top headlines news for checked sources
           getTopHeadlinesNews(checkedValues).then(articles => {

             // re-render news-list component with new data
             updateNewsList(articles);

             // hide spinner as we have already downloaded data
             setTimeout(() => {
               toggleSpinner();
             }, 1000);

           });
         }
       }, this.sourceItemDelay);
    });
  }
  getAllCheckedValues() {
    let checkedValues = [];

    Array.prototype.forEach.call(this.list.querySelectorAll('input:checked'), function(elem) {
      checkedValues.push(elem.value);
    });

    return checkedValues.join(',');
  }
}
class Spinner {
  constructor() {
    this.spinner = this.createComponent();
  }
  createComponent() {
    return document.createElement('div');
  }
  build() {
    this.spinner.className = 'spinner';
    this.spinner.innerHTML = '<img class="spinner__img" src="./img/spinner.svg">';

    return this;
  }
  getComponent() {
    return this.spinner;
  }
  toggle() {
    this.spinner.classList.contains('spinner--show') ? this.spinner.classList.remove('spinner--show') : this.spinner.classList.add('spinner--show');
  }
}
class ToggleBtn {
  constructor() {
    this.toggleBtn = this.createComponent();
  }
  createComponent() {
    return document.createElement('button');
  }
  build() {
    this.toggleBtn.className = 'toggle-btn';
    this.toggleBtn.innerHTML = '<span class="toggle-btn__line"></span>'.repeat(3);

    return this;
  }
  getComponent() {
    return this.toggleBtn;
  }
  initToggleBtnHandler(handler) {
    this.toggleBtn.addEventListener('click', handler);
  }
}


/*

Services

*/
class RequestsService {
  constructor() {
    this.apiKey = configAPI.apiKey;
    this.urlPrefix = configAPI.urlPrefix;
    this.topHeadlinesParam = configAPI.topHeadlinesParam;
    this.sourcesParam = configAPI.sourcesParam;
    this.defaultSources = configAPI.defaultSources;
  }
  getTopHeadlinesURL(sources) {
    const sourcesList = sources ? sources : this.defaultSources.join(',');

    return `${this.urlPrefix}/${this.topHeadlinesParam}?sources=${sourcesList}&apiKey=${this.apiKey}`;
  }
  getNewsSourcesURL() {
    return `${this.urlPrefix}/${this.sourcesParam}?apiKey=${this.apiKey}`;
  }
  async getTopHeadlinesNews(sources) {
    const url = this.getTopHeadlinesURL(sources);
    const response = await fetch(url);
    const data = await response.json();

    return data.articles;
  }
  async getNewsSources() {
    const url = this.getNewsSourcesURL();
    const response = await fetch(url);
    const data = await response.json();

    return data.sources;
  }
}


/*

App

*/

class App {
  constructor() {
    this.appElement = document.querySelector('.root');
    this.sidebar = new Sidebar();
    this.spinner = new Spinner();
    this.pageContent = new PageContent();
    this.sourcesList = new SourcesList();
    this.newsList= new NewsList();
    this.toggleBtn = new ToggleBtn();
    this.footer = new Footer();
    this.requestsService = new RequestsService();
    this.hideSpinnerDelay = 1000;
  }
  initEventHandlers() {
    this.sourcesList.initCheckboxHandler(this.getEventHandlersCallbacks());
    this.toggleBtn.initToggleBtnHandler(this.sidebar.changeSidebarView.bind(this.sidebar));
  }
  build([articles, sources]) {
    const newsListComponent = this.newsList.build(articles).getComponent();
    const pageContentComponent = this.pageContent.build(newsListComponent).getComponent();
    const sourcesListComponent = this.sourcesList.build(sources).getComponent();
    const sidebarComponent = this.sidebar.build(sourcesListComponent).getComponent();
    const toggleBtnComponent = this.toggleBtn.build().getComponent();
    const footerComponent = this.footer.build().getComponent();

    pageContentComponent.appendChild(footerComponent)

    this.appElement.appendChild(toggleBtnComponent);
    this.appElement.appendChild(sidebarComponent);
    this.appElement.appendChild(pageContentComponent);
  }
  showSpinner() {
    this.appElement.appendChild(this.spinner.build().getComponent());
    this.spinner.toggle();
  }
  hideSpinner() {
    setTimeout(() => {
      this.spinner.toggle();
    }, this.hideSpinnerDelay)
  }
  fetchData() {
    return Promise.all([this.requestsService.getTopHeadlinesNews(), this.requestsService.getNewsSources()]);
  }
  getEventHandlersCallbacks() {
    return {
      getTopHeadlinesNews: this.requestsService.getTopHeadlinesNews.bind(this.requestsService),
      updateNewsList: this.newsList.updateComponent.bind(this.newsList),
      toggleSpinner: this.spinner.toggle.bind(this.spinner)
    };
  }
  init() {

    this.showSpinner();

    this.fetchData().then(data => {
      this.initEventHandlers(data);
      this.build(data);
      this.hideSpinner();
    });    
  }
}

const myApp = new App();
myApp.init();
