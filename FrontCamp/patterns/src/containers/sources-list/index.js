import View from '../../view.js';
import store from '../../redux/store.js';
import { fetchSources, fetchNews, startFetching, finishFetching } from '../../redux/actions.js';
import './styles.css';

export default class SourcesList extends View {
  constructor() {
    super();
    this.element = this.createElement('div');
    this.className = 'sources';
    this.listElement = this.createElement('ul');
    this.listClassName = 'sources__list';

    this.delay = 1300;

    this.element.appendChild(this.listElement);

    this.initCheckboxHandler();
    this.onInit(this.element, this.className);
    this.onInit(this.listElement, this.listClassName);

    store.subscribe(this.update.bind(this));
    this.fetchSources();
  }
  buildSourcesItems(sources) {
    if (sources) {
      return sources.map(elem => (
        `<li class="sources__item">
          <label class="sources__label">
            <input class="sources__input" type="checkbox" value=${elem.id}>
            <span class="sources__checkbox"></span>
            <span class="sources__text">${elem.name}</span>
          </label>
        </li>`
      )).join('');
    }
  }
  update(prevState, currentState) {
    if (prevState.sources !== currentState.sources) {
      this.listElement.innerHTML = this.buildSourcesItems(currentState.sources);
    }
  }
  getAllCheckedValues() {
    let checkedValues = [];
    this.listElement.querySelectorAll('input:checked').forEach(elem => checkedValues.push(elem.value));

    return checkedValues.join(',');
  }
  initCheckboxHandler() {
    let timer = null;

    this.listElement.addEventListener('click', (e) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {

        // check if click was made on input tag
         if (e.target.tagName === 'INPUT') {

           // get all checked values from sources list
           const checkedValues = this.getAllCheckedValues();
           this.fetchNews(checkedValues);
         }
      }, this.delay);
    });
  }
  fetchNews(sources) {
    store.dispatch(startFetching());

    fetchNews(sources).then(action => {
      store.dispatch(action);
      store.dispatch(finishFetching());
    });
  }
  fetchSources() {
    store.dispatch(startFetching());

    fetchSources().then(action => {
      store.dispatch(action);
      store.dispatch(finishFetching());
    });
  }
}
