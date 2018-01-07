import View from '../../view.js';
import './styles.css';

export default class ToggleBtn extends View {
  constructor() {
    super();
    this.element = this.createElement('button');
    this.className = 'toggle-btn';
    this.content = '<span class="toggle-btn__line"></span>'.repeat(3);

    this.onInit(this.element, this.className, this.content);
  }
  initHandler(handler) {
    this.element.addEventListener('click', handler);
  }
}
