(function() {

  // entry point
  const App = document.querySelector('.root');

  // classes
  const sidebar = new Sidebar();
  const spinner = new Spinner();
  const pageContent = new PageContent();
  const sourcesList = new SourcesList();
  const newsList= new NewsList();
  const toggleBtn = new ToggleBtn();
  const footer = new Footer();

  // services
  const requestsService = new RequestsService();

  // checkbox config
  const checkboxHandlerConfig = {
    getTopHeadlinesNews: requestsService.getTopHeadlinesNews.bind(requestsService),
    updateNewsList: newsList.updateComponent.bind(newsList),
    toggleSpinner: spinner.toggle.bind(spinner)
  };

  // get components
  const toggleBtnComponent = toggleBtn.getComponent();
  const footerComponent = footer.getComponent();
  const spinnerComponent = spinner.getComponent();

  // show spinner as we are going to fetch data
  App.append(spinnerComponent);
  spinner.toggle();

  Promise.all([requestsService.getTopHeadlinesNews(), requestsService.getNewsSources()]).then(([{articles}, {sources}]) => {
    const newsListComponent = newsList.getComponent(articles);
    const pageContentComponent = pageContent.getComponent(newsListComponent);
    const sourcesListComponent = sourcesList.getComponent(sources);
    const sidebarComponent = sidebar.getComponent(sourcesListComponent);

    sourcesList.initCheckboxHandler(checkboxHandlerConfig);
    toggleBtn.initToggleBtnHandler(sidebarComponent);

    pageContentComponent.append(footerComponent)

    App.parentNode.append(toggleBtnComponent);
    App.append(pageContentComponent);
    App.prepend(sidebarComponent);

    // hide spinner as we have already downloaded all data
    setTimeout(() => {
      spinner.toggle();
    }, 1000)
  });
})();
