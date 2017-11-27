class requestsServiceClass {
  constructor() {
    this.apiKey = '88323f990dab404cb1369f23f88a2053';
    this.reqUrlPrefix = 'https://newsapi.org/v2';
    this.reqAllNewsParam = 'everything';
    this.reqTopHeadlinesParam = 'top-headlines';
    this.reqSourcesParam = 'sources';
    this.defaultParams = {
      country: 'us',
      language: 'en',
      sources: [
        'bbc-news',
        'cnn',
        'the-telegraph'
      ]
    }
  }
  getTopHeadlinesURL() {
    const sources = this.defaultParams.sources.join(',');

    return `${this.reqUrlPrefix}/${this.reqTopHeadlinesParam}?sources=${sources}&language=${this.defaultParams.language}&country=${this.defaultParams.country}&apiKey=${this.apiKey}`;
  }
  getNewsSourcesURL() {
    return `${this.reqUrlPrefix}/${this.reqSourcesParam}?language=${this.defaultParams.language}&county=${this.defaultParams.country}&apiKey=${this.apiKey}`;
  }
  getEverythingNewsURL(sources) {
    return `${this.reqUrlPrefix}/${this.reqTopHeadlinesParam}?sources=${sources}&language=${this.defaultParams.language}&apiKey=${this.apiKey}`;
  }
  getTopHeadlinesNews() {
    const url = this.getTopHeadlinesURL();

    return fetch(url).then(data => data.json());
  }
  getEverythingNews(sources) {
    const url = this.getEverythingNewsURL(sources);

    return fetch(url).then(data => data.json());
  }
  getNewsSources() {
    const url = this.getNewsSourcesURL();

    return fetch(url).then(data => data.json());
  }
}
