// Config
import { configAPI } from '../config/configAPI.js';

export default class RequestsService {
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
  async getTopHeadlinesNews(sources) {
    const url = this.getTopHeadlinesURL(sources);
    const response = await fetch(url);
    const data = await response.json();

    return data.articles;
  }
  async getNewsSources() {
    const url = this.getNewsSourcesURL();
    const response = await fetch(url);
    const data = await response.json();

    return data.sources;
  }
}
