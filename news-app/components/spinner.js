class Spinner {
  constructor() {
    this.spinner = document.createElement('div');
  }
  getComponent() {
    this.spinner.className = 'spinner';
    this.spinner.innerHTML = '<img class="spinner__img" src="./img/spinner.svg">';

    return this.spinner;
  }
  toggle() {
    this.spinner.classList.contains('spinner--show') ? this.spinner.classList.remove('spinner--show') : this.spinner.classList.add('spinner--show');
  }
}
