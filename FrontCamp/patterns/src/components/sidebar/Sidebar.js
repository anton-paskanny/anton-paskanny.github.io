export default class Sidebar {
  constructor() {
    this.domNode = this.createElement();
  }
  createElement() {
    return document.createElement('aside');
  }
  getComponent() {
    return this.domNode;
  }
  build() {
    this.domNode.className = 'sidebar';
    return this;
  }
  changeSidebarView() {
    this.domNode.classList.contains('sidebar--opened') ?
      this.domNode.classList.remove('sidebar--opened') :
      this.domNode.classList.add('sidebar--opened');
  }
}
