class sourcesListClass {
  getListItems(sources) {
    return sources.map(elem => (
      `<label class="filter__label">
        <input class="filter__input" type="checkbox" value=${elem.id}>
        <span  class="filter__text">${elem.name}</span>
      </label>`
    )).join('');
  }
  generateTemplate(sources) {
    const items = this.getListItems(sources),
          form = document.createElement('form'),
          title = document.createElement('h3');

    form.className = 'filter';
    title.className = 'filter__title'

    form.innerHTML = items;

    return form;
  }
}
