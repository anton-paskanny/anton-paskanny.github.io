import View from '../../view.js';
import './styles.css';

export default class PageContent extends View {
  constructor() {
    super();
    this.element = this.createElement('div');
    this.className = 'page-content';

    this.onInit(this.element, this.className);
  }
}
