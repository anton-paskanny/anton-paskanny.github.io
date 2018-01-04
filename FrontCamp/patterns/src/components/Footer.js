export default class Footer {
  constructor() {
    // Singletone pattern
    if (!Footer.instance) {
      this.domNode = this.createElement()
      Footer.instance = this;
    }

    return Footer.instance;
  }
  createElement() {
    return document.createElement('footer');
  }
  build() {
    this.domNode.className = 'footer';
    this.domNode.innerHTML = '<p>Powered by <a href="https://newsapi.org/" title="NewsAPI">NewsAPI.org</a></p>';

    return this;
  }
  getDomNode() {
    return this.domNode;
  }
}
