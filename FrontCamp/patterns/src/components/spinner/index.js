import View from '../../view.js';
import store from '../../redux/store.js'
import './styles.css';

export default class Spinner extends View {
  constructor() {
    super();
    this.element = this.createElement('div');
    this.className = 'spinner';
    this.content = '<img class="spinner__img" src="./img/spinner.svg">';
    this.hideDelay = 900;

    this.onInit(this.element, this.className, this.content);
    store.subscribe(this.toggle.bind(this));
  }
  /**
   * Show/hide method for spinner
   * @function
   */
  toggle(prevState, currentState) {
    let timer = null;

    if (currentState.isLoading) {
      this.element.classList.add('spinner--show');
    }
    else {
      timer = setTimeout(() => {
        this.element.classList.remove('spinner--show');
        clearTimeout(timer);
      }, this.hideDelay);
    }
  }
}
