import View from '../../core/view.js';
import './styles.css';

export default class PageContent extends View {
  constructor() {
    super({
      selector: 'div',
      className: 'page-content'
    });
  }
}
