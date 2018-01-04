export default class SourcesList {
  constructor() {
    this.domNode = this.createElement();
    this.sourceItemDelay = 1300;
  }
  createElement() {
    return document.createElement('div');
  }
  getListItems(sources) {
    if (sources) {
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

    return '<p>Sources were not received</p>'
  }
  build() {
    this.list = document.createElement('ul');

    this.domNode.className = 'filter';
    this.list.className = 'filter__list';

    this.domNode.appendChild(this.list);

    return this;
  }
  render(prevState, currentState) {
    if (prevState.sources !== currentState.sources) {
      this.list.innerHTML = this.getListItems(currentState.sources);
    }
  }
  getComponent() {
    return this.domNode;
  }
  getAllCheckedValues() {
    let checkedValues = [];

    this.list.querySelectorAll('input:checked').forEach(elem => checkedValues.push(elem.value));

    return checkedValues.join(',');
  }
  initCheckboxHandler(getNews) {
    let timer = null;

    this.list.addEventListener('click', (e) => {

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        // check if click was made on input tag
         if (e.target.tagName === 'INPUT') {

           // get all checked values from sources list
           const checkedValues = this.getAllCheckedValues();

           getNews(checkedValues);
         }
      }, this.sourceItemDelay);
    });
  }
}
