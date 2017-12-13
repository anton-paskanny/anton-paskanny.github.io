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
    this.appComponent = this.createComponent();
    this.sidebar = new Sidebar();
    this.spinner = new Spinner();
    this.pageContent = new PageContent();
    this.sourcesList = new SourcesList();
    this.toggleBtn = new ToggleBtn();
    this.footer = new Footer();
    this.requestsService = new RequestsService();
    this.hideSpinnerDelay = 1000;
    this.getNewsButton = new GetNewsButton();
    this.newsList = null;

    // some components used by dynamic chunk
    this.pageContentComponent = null;
    this.newsListComponent = null;
    this.footerComponent = null;
    this.sourcesListComponent = null;
    this.sidebarComponent = null;
    this.toggleBtnComponent = null;
    this.getNewsButtonComponent = null;
  }
  createComponent() {
    const div = document.createElement('div');
    div.className = 'app';
    
    return div;
  }
  initEventHandlers() {
    this.toggleBtn.initToggleBtnHandler(this.sidebar.changeSidebarView.bind(this.sidebar));
    this.getNewsButton.initGetNewsBtnHandler(this.fetchAndBuildNews.bind(this));
  }
  build(sources) {

    // define app's components
    this.sourcesListComponent = this.sourcesList.build(sources).getComponent();
    this.sidebarComponent = this.sidebar.build(this.sourcesListComponent).getComponent();
    this.toggleBtnComponent = this.toggleBtn.build().getComponent();
    this.getNewsButtonComponent = this.getNewsButton.build().getComponent();
    this.pageContentComponent = this.pageContent.build().getComponent();
    this.footerComponent = this.footer.build().getComponent();
    
    // insert main component
    document.body.insertBefore(this.appComponent, document.querySelector('script'));
    
    // build another app's components
    this.pageContentComponent.appendChild(this.footerComponent)
    this.sidebarComponent.appendChild(this.getNewsButtonComponent);

    this.appComponent.appendChild(this.toggleBtnComponent);
    this.appComponent.appendChild(this.sidebarComponent);
    this.appComponent.appendChild(this.pageContentComponent);
  }
  showSpinner() {
    this.appComponent.appendChild(this.spinner.build().getComponent());
    this.spinner.toggle();
  }
  hideSpinner() {
    setTimeout(() => {
      this.spinner.toggle();
    }, this.hideSpinnerDelay)
  }
  fetchAndBuildNews() {
    return import(/* webpackChunkName: "news" */ './components/news-list/NewsList.js').then(data => {

      // define instance of newsList from chunk file
      if (!this.newsList) {
        this.newsList = new data.default;
      }
      
      // get checked news sources
      const checkedSources = this.sourcesList.getAllCheckedValues();
      
      // fetch news
      this.showSpinner();
      
      this.requestsService.getTopHeadlinesNews(checkedSources).then(articles => {
      
        if (!this.newsListComponent) {
          this.newsListComponent = this.newsList.build(articles).getComponent();
          this.pageContentComponent.insertBefore(this.newsListComponent, this.footerComponent);
        }
        else {
          this.newsList.updateComponent(articles);
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
