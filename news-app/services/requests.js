class RequestsService {
  constructor() {
    this.apiKey = '88323f990dab404cb1369f23f88a2053';
    this.reqUrlPrefix = 'https://newsapi.org/v2';
    this.reqTopHeadlinesParam = 'top-headlines';
    this.reqSourcesParam = 'sources';
    this.sources = [
      'bbc-news',
      'cnn',
      'the-telegraph'
    ]
  }
  getTopHeadlinesURL(sources) {
    const sourcesList = sources ? sources : this.sources.join(',');

    return `${this.reqUrlPrefix}/${this.reqTopHeadlinesParam}?sources=${sourcesList}&apiKey=${this.apiKey}`;
  }
  getNewsSourcesURL() {
    return `${this.reqUrlPrefix}/${this.reqSourcesParam}?apiKey=${this.apiKey}`;
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
