class SourcesList {
  constructor() {
    this.form = document.createElement('form');
  }
  getListItems(sources) {
    return sources.map(elem => (
      `<label class="filter__label">
        <input class="filter__input" type="checkbox" value=${elem.id}>
        <span class="filter__checkbox"></span>
        <span class="filter__text">${elem.name}</span>
      </label>`
    )).join('');
  }
  getComponent(sources) {
    const items = this.getListItems(sources);

    this.form.className = 'filter';
    this.form.innerHTML = items;

    return this.form;
  }
  initCheckboxHandler({getTopHeadlinesNews, updateNewsList, toggleSpinner}) {
    this.form.addEventListener('click', (e) => {

      // check if click was made on input tag
      if (e.target.tagName === 'INPUT') {

        // get all checked values from sources list
        const checkedValues = this.getAllCheckedValues();

        // if something was checked then..
        if (checkedValues) {

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
      }
    });
  }
  getAllCheckedValues() {
    let checkedValues = [];

    this.form.querySelectorAll('input:checked').forEach(elem => checkedValues.push(elem.value));

    return checkedValues.join(',');
  }
}
