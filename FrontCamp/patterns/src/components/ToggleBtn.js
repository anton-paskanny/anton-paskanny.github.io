export default class ToggleBtn {
  constructor() {
    this.domNode = this.createElement();
  }
  createElement() {
    return document.createElement('button');
  }
  build() {
    this.domNode.className = 'toggle-btn';
    this.domNode.innerHTML = '<span class="toggle-btn__line"></span>'.repeat(3);

    return this;
  }
  getComponent() {
    return this.domNode;
  }
  initToggleBtnHandler(handler) {
    this.domNode.addEventListener('click', handler);
  }
}
