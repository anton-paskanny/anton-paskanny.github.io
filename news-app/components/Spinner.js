class Spinner {
  constructor() {
    this.spinner = this.createComponent();
  }
  createComponent() {
    return document.createElement('div');
  }
  build() {
    this.spinner.className = 'spinner';
    this.spinner.innerHTML = '<img class="spinner__img" src="./img/spinner.svg">';

    return this;
  }
  getComponent() {
    return this.spinner;
  }
  toggle() {
    this.spinner.classList.contains('spinner--show') ? this.spinner.classList.remove('spinner--show') : this.spinner.classList.add('spinner--show');
  }
}
