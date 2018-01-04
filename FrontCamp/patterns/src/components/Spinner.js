export default class Spinner {
  constructor() {
    this.domNode = this.createElement();
  }
  createElement() {
    return document.createElement('div');
  }
  build() {
    this.domNode.className = 'spinner';
    this.domNode.innerHTML = '<img class="spinner__img" src="./img/spinner.svg">';

    return this;
  }
  getComponent() {
    return this.spinner;
  }
  toggle() {
    this.domNode.classList.contains('spinner--show') ? this.domNode.classList.remove('spinner--show') : this.domNode.classList.add('spinner--show');
  }
}
