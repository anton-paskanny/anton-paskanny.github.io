class RequestsService {
  constructor() {
    this.apiKey = configAPI.apiKey;
    this.urlPrefix = configAPI.urlPrefix;
    this.topHeadlinesParam = configAPI.topHeadlinesParam;
    this.sourcesParam = configAPI.sourcesParam;
    this.defaultSources = configAPI.defaultSources;
  }
  getTopHeadlinesURL(sources) {
    const sourcesList = sources ? sources : this.defaultSources.join(',');

    return `${this.urlPrefix}/${this.topHeadlinesParam}?sources=${sourcesList}&apiKey=${this.apiKey}`;
  }
  getNewsSourcesURL() {
    return `${this.urlPrefix}/${this.sourcesParam}?apiKey=${this.apiKey}`;
  }
  getTopHeadlinesNews(sources) {
    const url = this.getTopHeadlinesURL(sources);

    return fetch(url).then(data => data.json());
  }
  getNewsSources() {
    const url = this.getNewsSourcesURL();

    return fetch(url).then(data => data.json());
  }
}
