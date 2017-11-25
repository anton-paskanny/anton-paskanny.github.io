(function() {

  const App = document.querySelector('.root');

  const requestsService = new requestsServiceClass();

  // classes
  const sidebar = new SidebarClass();
  const pageContent = new PageContentClass();
  const sourcesList = new sourcesListClass();
  const newsList= new newsListClass();

  // get news by default
  requestsService.getTopHeadlinesNews().then(({articles}) => {
    const newsListComponent = newsList.generateTemplate(articles),
          pageContentComponent = pageContent.generateTemplate(newsListComponent)

    App.append(pageContentComponent);
  });

  // get sources by default
  requestsService.getNewsSources().then(({sources}) => {
    const sourcesListComponent = sourcesList.generateTemplate(sources),
          sidebarComponent = sidebar.generateTemplate(sourcesListComponent)

    App.prepend(sidebarComponent);
  });

})();
