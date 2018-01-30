// Config
import { configServer } from '../config/configServer.js';

export default class RequestsService {
  constructor() {
    this.urlPrefix = configServer.urlPrefix;
    this.topHeadlinesParam = configServer.topHeadlinesParam;
    this.sourcesParam = configServer.sourcesParam;
    this.serverPort = configServer.port;
    this.blogsParam = configServer.blogsParam;
    this.sourcesParam = configServer.sourcesParam;
    this.defaultSources = configServer.defaultSources;
  }
  getTopHeadlinesURL(sources) {
    const sourcesList = sources ? sources : this.defaultSources.join(',');
    return `${this.urlPrefix}${this.serverPort}/${this.blogsParam}?sources=${sourcesList}`;
  }
  getNewsSourcesURL() {
    return `${this.urlPrefix}${this.serverPort}/${this.sourcesParam}`;
  }
  async getTopHeadlinesNews(sources) {
    const url = this.getTopHeadlinesURL(sources);

    const response = await fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    return data.articles;
  }
  async getNewsSources() {
    const url = this.getNewsSourcesURL();
    const response = await fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    return data.sources;
  }
}
