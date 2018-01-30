import View from '../../core/view.js';
import store from '../../core/redux/store.js'
import './styles.css';

export default class Spinner extends View {
  constructor() {
    super({
      selector: 'div',
      className: 'spinner',
      content: '<img class="spinner__img" src="./img/spinner.svg">'
    });
    
    this.hideDelay = 900;

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
