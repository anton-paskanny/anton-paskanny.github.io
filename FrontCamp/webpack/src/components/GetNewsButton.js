export default class GetNewsButton {
  constructor() {
    this.getNewsBtn = this.createComponent();
  }
  createComponent() {
    return document.createElement('button');
  }
  build() {
    this.getNewsBtn.className = 'get-news-btn';
    this.getNewsBtn.innerHTML = 'Get news'

    return this;
  }
  getComponent() {
    return this.getNewsBtn;
  }
  initGetNewsBtnHandler(handler) {
    this.getNewsBtn.addEventListener('click', handler);
  }
}
