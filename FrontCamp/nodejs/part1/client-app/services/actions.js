import * as actions from '../core/redux/actions.js';
import store from '../core/redux/store.js';


export const fetchNews = (sources) => {
  store.dispatch(actions.startFetching());

  actions.fetchNews(sources).then(action => {
    store.dispatch(action);
    store.dispatch(actions.finishFetching());
  });
}

export const fetchSources = () => {
  store.dispatch(actions.startFetching());

  actions.fetchSources().then(action => {
    store.dispatch(action);
    store.dispatch(actions.finishFetching());
  });
}
