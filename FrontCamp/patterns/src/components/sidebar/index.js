import View from '../../core/view.js';
import './styles.css';

export default class Sidebar extends View {
  constructor() {
    super({
      selector: 'aside',
      className: 'sidebar'
    });
  }
  changeSidebarView() {
    this.element.classList.contains('sidebar--opened') ?
    this.element.classList.remove('sidebar--opened') :
    this.element.classList.add('sidebar--opened');
  }
}
