class PageContent {
  constructor() {
    this.pageContent = document.createElement('section');
  }
  getComponent(newsComponent) {
    this.pageContent.className = 'page-content';

    this.pageContent.append(newsComponent);

    return this.pageContent;
  }
}
