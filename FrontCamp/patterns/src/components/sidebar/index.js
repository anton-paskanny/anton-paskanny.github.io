import View from '../../view.js';
import './styles.css';

export default class Sidebar extends View {
  constructor() {
    super();
    this.element = this.createElement('aside');
    this.className = 'sidebar';

    this.onInit(this.element, this.className);
  }
  changeSidebarView() {
    this.element.classList.contains('sidebar--opened') ?
    this.element.classList.remove('sidebar--opened') :
    this.element.classList.add('sidebar--opened');
  }
}
