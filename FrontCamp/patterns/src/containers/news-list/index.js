import View from '../../view.js';
import store from '../../redux/store.js';
import { fetchNews, startFetching, finishFetching } from '../../redux/actions.js';
import "./styles.css";

export default class NewsList extends View {
  constructor() {
    super();
    this.element = this.createElement('section');
    this.className = 'news';

    this.onInit(this.element, this.className);

    store.subscribe(this.update.bind(this));
    this.fetchNews();
  }
  buildNews(news) {
    return news.map(article => (
        `<article class="news__article">
              ${article.urlToImage ?
                `<img class="news__img" src=${article.urlToImage} alt='${article.title}'>`
                : '<div class="news__img"></div>'
              }
              <div class="news__text-content">
                <h2 class="news__title">${article.title}</h2>
                <p class="news__info-line">
                  ${article.author ?
                    `<span class="news__info-item">
                      <img class="news__info-icon" src="./img/news.svg" alt="Source icon"> ${article.author}
                    </span>` : ''
                  }
                  ${article.publishedAt ?
                    `<span class="news__info-item">
                        <img class="news__info-icon" src="./img/calendar.svg" alt="Calendar icon">
                        ${this.transformPublishedDate(article.publishedAt)}
                     </span>` : ''
                  }
                </p>
                ${article.description ? `<p class="news__desc">${article.description}</p>` : ''}
                <a class="news__link" href=${article.url} target="_blank" title="${article.title}...read more">Read more</a>
              </div>
         </article>`
    )).join('');
  };
  transformPublishedDate(date) {
    return new Date(date).toLocaleString();
  }
  fetchNews(sources) {
    store.dispatch(startFetching());

    fetchNews(sources).then(action => {
      store.dispatch(action);
      store.dispatch(finishFetching());
    });
  }
  update(prevState, currentState) {
    //console.log("Prev:", prevState.news);
    //console.log("Current:", currentState.news);
    if (currentState.news !== prevState.news) {
      //console.log("News has updated, need to rerender!!!");
      this.element.innerHTML = this.buildNews(currentState.news);
    } else {
      //console.log("News hasn't updated, don't need to rerender!!!")
    }
  }
}
