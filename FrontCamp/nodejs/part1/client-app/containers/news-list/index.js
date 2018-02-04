import View from '../../core/view.js';
import store from '../../core/redux/store.js';
import { fetchNews } from '../../services/actions.js';
import * as actions from '../../core/redux/actions.js';
import "./styles.css";

export default class NewsList extends View {
  constructor() {
    super({
        selector: 'section',
        className: 'news'
    });

    store.subscribe(this.update.bind(this));
    fetchNews();
  }
  buildNews(news) {
    return news ? news.map(article => (
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
    )).join('') : null;
  };
  transformPublishedDate(date) {
    return new Date(date).toLocaleString();
  }
  update(prevState, currentState) {
    const currentNews = this.buildNews(currentState.news);
    const prevNews = this.buildNews(prevState.news);

    if (currentNews !== prevNews) {
      this.element.innerHTML = currentNews;
    }
  }
}
