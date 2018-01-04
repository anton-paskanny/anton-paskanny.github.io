export default class SidebarTitle {
  constructor() {
    this.domNode = this.createElement();
  }
  createElement() {
    return document.createElement('h3');
  }
  getComponent() {
    return this.domNode;
  }
  build() {
    this.domNode.className = 'sidebar__title';
    this.domNode.textContent = 'News Sources filter';

    return this;
  }
}
