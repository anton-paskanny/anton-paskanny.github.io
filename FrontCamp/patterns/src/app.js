// Dynamic images
import CalendarIcon from './img/calendar.svg';
import NewsIcon from './img/news.svg';
import SpinnerIcon from './img/spinner.svg';

// Containers
import NewsList from './containers/news-list/index.js';
import SourcesList from './containers/sources-list/index.js';

// Components
import Sidebar from './components/sidebar/index.js';
import SidebarTitle from './components/sidebar/sidebar-title/index.js';
import Spinner from './components/spinner/index.js';
import PageContent from './components/page-content/index.js';
import ToggleBtn from './components/toggle-btn/index.js';
import Footer from './components/footer/index.js';

// Services
import RequestsService from './services/Requests.js';

// Helper
import View from './view.js';

// Main class
export default class App extends View {
  constructor() {
    super();
    this.AppElement = this.createElement('div');
    this.AppClassName = 'app';
    this.requestsService = new RequestsService();

    // components used in App
    this.components = [
      NewsList,
      SourcesList,
      Sidebar,
      SidebarTitle,
      Spinner,
      PageContent,
      ToggleBtn,
      Footer
    ];

    this.onInit(this.AppElement, this.AppClassName);
  }
  /**
   * Init App's components events handlers
   * @function
   */
  initEventHandlers() {
    this.ToggleBtn.initHandler(this.Sidebar.changeSidebarView.bind(this.Sidebar));
  }
  /**
   * Fabric method for creating App's components
   * @function
   */
  defineComponents() {
    this.components.forEach(Component => {
      this[Component.name] = new Component();
    });
  }
  /**
   * Insert defined components into page
   * @function
   */
  render() {
    document.body.insertBefore(this.AppElement, document.querySelector('script'));

    this.append(this.PageContent.element, [this.NewsList, this.Footer]);
    this.append(this.Sidebar.element, [this.SidebarTitle, this.SourcesList]);
    this.append(this.AppElement, [this.Spinner, this.PageContent, this.Sidebar, this.ToggleBtn]);
  }
  /**
   * Init App component
   * Define all App's components, insert them into page and init necessary event handlers
   * @function
   */
  init() {
    this.defineComponents();
    this.render();
    this.initEventHandlers();
  }
}
