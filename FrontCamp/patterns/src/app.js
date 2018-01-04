// Dynamic images
import CalendarIcon from './img/calendar.svg';
import NewsIcon from './img/news.svg';
import SpinnerIcon from './img/spinner.svg';

// Components
import NewsList from './components/news-list/NewsList.js';
import Sidebar from './components/sidebar/Sidebar.js';
import SidebarTitle from './components/sidebar/SidebarTitle.js';
import Spinner from './components/Spinner.js';
import PageContent from './components/PageContent.js';
import SourcesList from './components/SourcesList.js';
import ToggleBtn from './components/ToggleBtn.js';
import Footer from './components/Footer.js';

// Services
import RequestsService from './services/Requests.js';

// Store
import Store from './store.js';

// Actions
import { addNews, addSources } from './actions.js';

// Main class
export default class App {
  constructor() {
    this.appComponent = this.createComponent();

    this.store = new Store();
    this.requestsService = new RequestsService();

    // components used in App
    this.sidebarComponent =
    this.components = {
      'sidebar': Sidebar,
      'sidebarTitle': SidebarTitle,
      'pageContent': PageContent,
      'newsList': NewsList,
      'footer': Footer,
      'spinner': Spinner,
      'sourcesList': SourcesList,
      'toggleBtn': ToggleBtn
    }

    // constants
    this.hideSpinnerDelay = 1000;
  }
  createComponent() {
    const div = document.createElement('div');
    div.className = 'app';

    return div;
  }
  initEventHandlers() {
    this.toggleBtnComponent.initToggleBtnHandler(this.sidebarComponent.changeSidebarView.bind(this.sidebarComponent));
    this.sourcesListComponent.initCheckboxHandler(this.checkboxHandler.bind(this));
  }
  defineComponents() {
    for (let component in this.components) {
      this.create(component);
    }
  }
  render() {
    // insert main component
    document.body.insertBefore(this.appComponent, document.querySelector('script'));

    // build another app's components
    this.pageContentComponent.domNode.appendChild(this.newsListComponent.domNode);
    this.pageContentComponent.domNode.appendChild(this.footerComponent.domNode);
    this.sidebarComponent.domNode.appendChild(this.sidebarTitleComponent.domNode);
    this.sidebarComponent.domNode.appendChild(this.sourcesListComponent.domNode);

    this.appComponent.appendChild(this.toggleBtnComponent.domNode);
    this.appComponent.appendChild(this.sidebarComponent.domNode);
    this.appComponent.appendChild(this.pageContentComponent.domNode);
  }
  /**
   * Fabric method for creating app's components
   * @function
   * @param {string} type - component to create ('Sidebar', 'Header', etc.)
   * @param {string} data - data for building component (optional). Data (received using API) is needed for building news or sources lists
   */
  create(type) {
    if (this.components[type]) {

      this[`${type}Component`] = new (this.components[type]);

      this[`${type}Component`].build();
    }
    else {
      console.log("App doesn't contain such a component");
    }
  }
  showSpinner() {
    this.appComponent.appendChild(this.spinnerComponent.domNode);
    this.spinnerComponent.toggle();
  }
  hideSpinner() {
    setTimeout(() => {
      this.spinnerComponent.toggle();
    }, this.hideSpinnerDelay)
  }
  fetchData() {
    return Promise.all([this.requestsService.getTopHeadlinesNews(), this.requestsService.getNewsSources()]);
  }
  /**
   * Method for getting news by click on input in sourcesListComponent
   * @function
   * @param {string} sources - checked news sources
   */
  checkboxHandler(sources) {
    this.showSpinner();

    this.requestsService.getTopHeadlinesNews(sources).then(news => {
      this.store.dispatch(addNews(news));

      this.hideSpinner();
    });
  }
  init() {
    // define app's components
    this.defineComponents();

    // add subscribers in store
    this.store.addSubscriber([
      this.newsListComponent.render.bind(this.newsListComponent),
      this.sourcesListComponent.render.bind(this.sourcesListComponent)
    ]);

    // show loading animation before fetching data
    this.showSpinner();

    // start fetching all necessary data for the app
    this.fetchData().then(data => {
      //this.initEventHandlers(data);

      this.store.dispatch(addNews(data[0]));
      this.store.dispatch(addSources(data[1]));

      console.log(this.store)

      // insert components into page
      this.render();

      this.initEventHandlers();

      // hide loading animation
      this.hideSpinner();
    });
  }
}
