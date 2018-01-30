import View from '../../core/view.js';
import store from '../../core/redux/store.js';
import { fetchSources, fetchNews } from '../../services/actions.js';
import './styles.css';

export default class SourcesList extends View {
  constructor() {
    super({
      selector: 'div',
      className: 'sources'
    });

    this.timer = null;
    this.delay = 1300;

    this.listElement = this.createElement('ul');
    this.listClassName = 'sources__list';
    this.listElement.className = this.listClassName;

    this.element.appendChild(this.listElement);

    this.initCheckboxHandler();
    store.subscribe(this.update.bind(this));
    fetchSources();
  }
  buildSourcesItems(sources) {
      return sources ? sources.map(elem => (
        `<li class="sources__item">
          <label class="sources__label">
            <input class="sources__input" type="checkbox" value=${elem.id}>
            <span class="sources__checkbox"></span>
            <span class="sources__text">${elem.name}</span>
          </label>
        </li>`
      )).join('') : null;
  }
  update(prevState, currentState) {
    const currentSources = this.buildSourcesItems(currentState.sources);
    const prevSources = this.buildSourcesItems(prevState.sources);

    if (currentSources !== prevSources) {
      this.listElement.innerHTML = currentSources;
    }
  }
  getAllCheckedValues() {
    let checkedValues = [];
    this.listElement.querySelectorAll('input:checked').forEach(elem => checkedValues.push(elem.value));

    return checkedValues.join(',');
  }
  checkboxHandler(e) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {

      // check if click was made on input tag
       if (e.target.tagName === 'INPUT') {

         // get all checked values from sources list
         const checkedValues = this.getAllCheckedValues();
         fetchNews(checkedValues);
       }
    }, this.delay);
  }
  initCheckboxHandler() {
    this.listElement.addEventListener('click', this.checkboxHandler.bind(this));
  }
}
