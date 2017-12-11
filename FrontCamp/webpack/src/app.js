// Dynamic images
import CalendarIcon from './img/calendar.svg';
import NewsIcon from './img/news.svg';
import SpinnerIcon from './img/spinner.svg';

// Compontents
import Sidebar from './components/Sidebar.js';
import Spinner from './components/Spinner.js';
import PageContent from './components/PageContent.js';
import SourcesList from './components/SourcesList.js';
import NewsList from './components/NewsList.js';
import ToggleBtn from './components/ToggleButton.js';
import Footer from './components/Footer.js';
import RequestsService from './services/Requests.js';

// Main class
export default class App {
  constructor() {
    this.appElement = this.createComponent();
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
  createComponent() {
    return document.createElement('div');
  }
  initEventHandlers() {
    this.sourcesList.initCheckboxHandler(this.getEventHandlersCallbacks());
    this.toggleBtn.initToggleBtnHandler(this.sidebar.changeSidebarView.bind(this.sidebar));
  }
  build([{articles}, {sources}]) {
    const newsListComponent = this.newsList.build(articles).getComponent();
    const pageContentComponent = this.pageContent.build(newsListComponent).getComponent();
    const sourcesListComponent = this.sourcesList.build(sources).getComponent();
    const sidebarComponent = this.sidebar.build(sourcesListComponent).getComponent();
    const toggleBtnComponent = this.toggleBtn.build().getComponent();
    const footerComponent = this.footer.build().getComponent();

    this.appElement.className = 'app';
    document.body.insertBefore(this.appElement, document.querySelector('script'));

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
