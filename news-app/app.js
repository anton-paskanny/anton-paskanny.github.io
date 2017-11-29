class App {
  constructor() {
    this.appElement = document.querySelector('.root');
    this.sidebar = new Sidebar();
    this.spinner = new Spinner();
    this.pageContent = new PageContent();
    this.sourcesList = new SourcesList();
    this.newsList= new NewsList();
    this.toggleBtn = new ToggleBtn();
    this.footer = new Footer();
    this.requestsService = new RequestsService();
    this.hideSpinnerDelay = 1000;
  }
  initEventHandlers() {
    this.sourcesList.initCheckboxHandler(this.getEventHandlersCallbacks());
    this.toggleBtn.initToggleBtnHandler(this.sidebar.changeSidebarView.bind(this.sidebar));
  }
  build([{articles}, {sources}]) {
    const newsListComponent = this.newsList.build(articles).getComponent();
    const pageContentComponent = this.pageContent.build(newsListComponent).getComponent();
    const sourcesListComponent = this.sourcesList.build(sources).getComponent();
    const sidebarComponent = this.sidebar.build(sourcesListComponent).getComponent();
    const toggleBtnComponent = this.toggleBtn.build().getComponent();
    const footerComponent = this.footer.build().getComponent();

    pageContentComponent.append(footerComponent)

    this.appElement.append(toggleBtnComponent);
    this.appElement.append(pageContentComponent);
    this.appElement.prepend(sidebarComponent);
  }
  showSpinner() {
    this.appElement.append(this.spinner.build().getComponent());
    this.spinner.toggle();
  }
  hideSpinner() {
    setTimeout(() => {
      this.spinner.toggle();
    }, this.hideSpinnerDelay)
  }
  fetchData() {
    return Promise.all([this.requestsService.getTopHeadlinesNews(), this.requestsService.getNewsSources()]);
  }
  getEventHandlersCallbacks() {
    return {
      getTopHeadlinesNews: this.requestsService.getTopHeadlinesNews.bind(this.requestsService),
      updateNewsList: this.newsList.updateComponent.bind(this.newsList),
      toggleSpinner: this.spinner.toggle.bind(this.spinner)
    };
  }
  init() {

    this.showSpinner();

    this.fetchData().then(data => {
      this.initEventHandlers(data);
      this.build(data);
      this.hideSpinner();
    });
  }
}
