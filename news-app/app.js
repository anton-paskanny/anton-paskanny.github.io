(function() {

  const App = document.querySelector('.root');

  const requestsService = new requestsServiceClass();

  // classes
  const sidebar = new SidebarClass();
  const pageContent = new PageContentClass();
  const sourcesList = new sourcesListClass();
  const newsList= new newsListClass();
  const toggleBtn = new ToggleBtnClass();

  const checkboxHandlerConfig = {
    getEverythingNews: requestsService.getEverythingNews.bind(requestsService),
    updateNewsList: newsList.updateComponent.bind(newsList)
  }

  const toggleBtnComponent = toggleBtn.getComponent();

  sourcesList.initCheckboxHandler(checkboxHandlerConfig);

  App.parentNode.append(toggleBtnComponent);

  // get news by default
  requestsService.getTopHeadlinesNews().then(({articles}) => {
    const newsListComponent = newsList.getComponent(articles),
          pageContentComponent = pageContent.getComponent(newsListComponent);

    App.append(pageContentComponent);
  });

  // get sources by default
  requestsService.getNewsSources().then(({sources}) => {
    const sourcesListComponent = sourcesList.getComponent(sources),
          sidebarComponent = sidebar.getComponent(sourcesListComponent);

    toggleBtn.initToggleBtnHandler(sidebarComponent);

    App.prepend(sidebarComponent);
  });
})();
