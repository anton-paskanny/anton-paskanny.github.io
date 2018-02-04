import { newsReducer, sourcesReducer, loadingReducer } from './reducers.js';

class Store {
  constructor() {
    if (typeof Store.instance === 'object') {
      return Store.instance;
    }

    this.subscribers = [];
    this.prevState = null;
    this.state = {
      isLoading: false,
      news: null,
      sources: null
    };

    Store.instance = this;
  }
  getState() {
    return this.state;
  }
  dispatch(action) {
    this.prevState = this.state;
    this.state = this.updateState(this.state, action);

    this.logger(action);

    // notify subscribers when data has updated
    this.notify();
  }
  subscribe(fn) {
    this.subscribers.push(fn);
  }
  updateState(state, action) {
    return {
      isLoading: loadingReducer(state, action),
      news: newsReducer(state.news, action),
      sources: sourcesReducer(state.sources, action)
    }
  }
  notify() {
    this.subscribers.forEach(fn => {
      fn(this.prevState, this.state);
    });
  }
  logger(action) {
    console.log('Dispatching action: ', action);
    console.log('Prev state: ', this.prevState);
    console.log('Current state: ', this.state);
    console.log('----------------------------');
  }
}

const store = new Store();
export default store;
