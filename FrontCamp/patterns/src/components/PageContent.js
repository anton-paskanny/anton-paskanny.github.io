export default class PageContent {
  constructor() {
    this.domNode = this.createElement();
  }
  createElement() {
    return document.createElement('section');
  }
  build() {
    this.domNode.className = 'page-content';
    return this;
  }
  getComponent() {
    return this.domNode;
  }
}
