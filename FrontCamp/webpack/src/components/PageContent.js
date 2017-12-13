export default class PageContent {
  constructor() {
    this.pageContent = this.createComponent();
  }
  createComponent() {
    return document.createElement('section');
  }
  build(component) {
    this.pageContent.className = 'page-content';

    if (component) this.pageContent.append(component);

    return this;
  }
  getComponent() {
    return this.pageContent;
  }
}
