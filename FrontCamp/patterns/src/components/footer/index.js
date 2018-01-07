import View from '../../view.js';
import './styles.css';

export default class Footer extends View {
  constructor() {
    super();
    this.element = this.createElement('footer');
    this.className = 'footer';
    this.content = '<p>Powered by <a href="https://newsapi.org/" title="NewsAPI">NewsAPI.org</a></p>';

    this.onInit(this.element, this.className, this.content);
  }
}
