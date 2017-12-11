export default class Footer {
  constructor() {
    this.footer = this.createComponent();
  }
  createComponent() {
    return document.createElement('footer');
  }
  build() {
    this.footer.className = 'footer';
    this.footer.innerHTML = '<p>Powered by <a href="https://newsapi.org/" title="NewsAPI">NewsAPI.org</a></p>';

    return this;
  }
  getComponent() {
    return this.footer;
  }
}
