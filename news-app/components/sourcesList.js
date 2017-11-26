class sourcesListClass {
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
  initCheckboxHandler({getEverythingNews, updateNewsList}) {
    this.form.addEventListener('click', (e) => {

      if (e.target.tagName === 'INPUT') {
        const checkedValues = this.getAllCheckedValues();

        if (checkedValues) {
          getEverythingNews(checkedValues).then(({articles}) => {
            updateNewsList(articles);
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
