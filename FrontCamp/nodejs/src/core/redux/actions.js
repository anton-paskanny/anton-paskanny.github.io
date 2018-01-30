import RequestsService from '../../services/Requests.js';

const requestsService = new RequestsService();

/*
 * Actions describe the fact that something happened,
 * but don't specify how the application's state changes in response
 */

/*
 * action types
 */
export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_SOURCES = 'FETCH_SOURCES';
export const START_FETCHING = 'START_FETCHING';
export const FINISH_FETCHING = 'FINISH_FETCHING';
/*
 * action creators
 */
export const startFetching = () => {
  return { type: START_FETCHING };
}

export const finishFetching = () => {
  return { type: FINISH_FETCHING };
}

export const fetchNews = async (sources) => {
  const response = await requestsService.getTopHeadlinesNews(sources);
  const news = await response;

  return {
    type: FETCH_NEWS,
    news
  }
}

export const fetchSources = async () => {
  const response = await requestsService.getNewsSources();
  const sources = await response;

  return {
    type: FETCH_SOURCES,
    sources
  }
}
