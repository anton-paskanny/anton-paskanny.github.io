import View from '../../core/view.js';
import './styles.css';

export default class ToggleBtn extends View {
  constructor() {
    super({
      selector: 'button',
      className: 'toggle-btn',
      content: '<span class="toggle-btn__line"></span>'.repeat(3)
    });
  }
  initHandler(handler) {
    this.element.addEventListener('click', handler);
  }
}
