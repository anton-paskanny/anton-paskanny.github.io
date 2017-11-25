class PageContentClass {
  generateTemplate(newsComponent) {
    const pageContent = document.createElement('section'),
          pageContentHeader = document.createElement('header');

    pageContent.className = 'page-content';
    pageContentHeader.className = 'page-content';

    pageContentHeader.textContent = 'Top Headlines news';

    pageContent.append(newsComponent);

    return pageContent;

  }
}
