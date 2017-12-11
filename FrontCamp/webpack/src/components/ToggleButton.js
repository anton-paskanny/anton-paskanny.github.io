export default class ToggleBtn {
  constructor() {
    this.toggleBtn = this.createComponent();
  }
  createComponent() {
    return document.createElement('button');
  }
  build() {
    this.toggleBtn.className = 'toggle-btn';
    this.toggleBtn.innerHTML = '<span class="toggle-btn__line"></span>'.repeat(3);

    return this;
  }
  getComponent() {
    return this.toggleBtn;
  }
  initToggleBtnHandler(handler) {
    this.toggleBtn.addEventListener('click', handler);
  }
}
