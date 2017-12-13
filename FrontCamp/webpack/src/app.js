// Dynamic images
import CalendarIcon from './img/calendar.svg';
import NewsIcon from './img/news.svg';
import SpinnerIcon from './img/spinner.svg';

// Compontents
import Sidebar from './components/Sidebar.js';
import Spinner from './components/Spinner.js';
import PageContent from './components/PageContent.js';
import SourcesList from './components/SourcesList.js';
import ToggleBtn from './components/ToggleButton.js';
import GetNewsButton from './components/GetNewsButton.js';
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
    this.toggleBtn = new ToggleBtn();
    this.footer = new Footer();
    this.requestsService = new RequestsService();
    this.hideSpinnerDelay = 1000;
    this.getNewsButton = new GetNewsButton();

    // some components
    this.pageContentComponent = null;
    this.newsListComponent = null;
    this.footerComponent = null;
  }
  createComponent() {
    return document.createElement('div');
  }
  initEventHandlers() {
    this.toggleBtn.initToggleBtnHandler(this.sidebar.changeSidebarView.bind(this.sidebar));
  }
  build(sources) {
    const sourcesListComponent = this.sourcesList.build(sources).getComponent();
    const sidebarComponent = this.sidebar.build(sourcesListComponent).getComponent();
    const toggleBtnComponent = this.toggleBtn.build().getComponent();
    const getNewsButtonComponent = this.getNewsButton.build().getComponent();

    this.pageContentComponent = this.pageContent.build().getComponent();
    this.footerComponent = this.footer.build().getComponent();

    this.appElement.className = 'app';
    document.body.insertBefore(this.appElement, document.querySelector('script'));

    this.pageContentComponent.appendChild(this.footerComponent)
    sidebarComponent.appendChild(getNewsButtonComponent);

    this.getNewsButton.initGetNewsBtnHandler(this.fetchAndBuildNews.bind(this));

    this.appElement.appendChild(toggleBtnComponent);
    this.appElement.appendChild(sidebarComponent);
    this.appElement.appendChild(this.pageContentComponent);
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
  fetchAndBuildNews() {
    return import(/* webpackChunkName: "news" */ './controllers/news.js').then(data => {

      // define instance of newsList from chunk file
      const newsList = data.default.NewsList;

      // get checked news sources
      const checkedSources = this.sourcesList.getAllCheckedValues();

      // fetch news
      this.showSpinner();

      this.requestsService.getTopHeadlinesNews(checkedSources).then(articles => {

        if (!this.newsListComponent) {
          this.newsListComponent = newsList.build(articles).getComponent();
          this.pageContentComponent.insertBefore(this.newsListComponent, this.footerComponent);
        }
        else {
          newsList.updateComponent(articles);
        }

        this.hideSpinner();
      });
    }).catch(error => 'An error occurred while loading the component');
  }
  fetchData() {
    return this.requestsService.getNewsSources();
  }
  init() {
    this.showSpinner();

     this.requestsService.getNewsSources().then(data => {
      this.initEventHandlers();
      this.build(data);
      this.hideSpinner();
    });
  }
}
