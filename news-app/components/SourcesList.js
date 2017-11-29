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
    this.wrapper.append(this.list);

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
           getTopHeadlinesNews(checkedValues).then(({articles}) => {

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

    this.list.querySelectorAll('input:checked').forEach(elem => checkedValues.push(elem.value));

    return checkedValues.join(',');
  }
}
