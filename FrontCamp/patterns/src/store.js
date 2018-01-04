import { newsReducer, sourcesReducer } from './reducers.js';

export default class Store {
  constructor() {
    if (typeof Store.instance === 'object') {
      return Store.instance;
    }

    this.subscribers = [];
    this.prevState = null;
    this.state = {
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

    this.state = this.updateStore(this.state, action);

    // notify subscribers when data has updated
    this.notifySubscribers();
  }
  updateStore(state, action) {
    return {
      news: newsReducer(state.news, action),
      sources: sourcesReducer(state.sources, action)
    }
  }
  addSubscriber(arr) {
    arr.forEach(fn => {
      this.subscribers.push(fn);
    });
    console.log('subscribers', this.subscribers);
  }
  notifySubscribers() {
    this.subscribers.forEach(fn => {
      fn(this.prevState, this.state);
    });
  }
}
