import View from '../../core/view.js';
import './styles.css';

export default class Footer extends View {
  constructor() {
    super({
      selector: 'footer',
      className: 'footer',
      content: '<p>Powered by <a href="https://newsapi.org/" title="NewsAPI">NewsAPI.org</a></p>'
    });
  }
}
