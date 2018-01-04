import "./styles.css";

export default class NewsList {
  constructor() {
    this.domNode = this.createElement();
    this.newsArticles = null;
  }
  createElement() {
    return document.createElement('div');
  }
  buildNews(data) {
    return data.news.map(article => (
        `<article class="news-article">
              ${article.urlToImage ?
                `<img class="news-article__img" src=${article.urlToImage} alt='${article.title}'>`
                : '<div class="news-article__img"></div>'
              }
              <div class="news-article__text-content">
                <h2 class="news-article__title">${article.title}</h2>
                <p class="news-article__info-line">
                  ${article.author ?
                    `<span class="news-article__info-item">
                      <img class="news-article__info-icon" src="./img/news.svg" alt="Source icon"> ${article.author}
                    </span>` : ''
                  }
                  ${article.publishedAt ?
                    `<span class="news-article__info-item">
                        <img class="news-article__info-icon" src="./img/calendar.svg" alt="Calendar icon">
                        ${this.transformPublishedDate(article.publishedAt)}
                     </span>` : ''
                  }
                </p>
                ${article.description ? `<p class="news-article__desc">${article.description}</p>` : ''}
                <a class="news-article__link" href=${article.url} target="_blank" title="${article.title}...read more">Read more</a>
              </div>
       </article>`
    )).join('');
  };
  transformPublishedDate(date) {
    const newDate = new Date(date);

    return newDate.toLocaleString();
  }
  build() {
    this.domNode.className = 'news-wrapper';

    return this;
  }
  render(prevState, currentState) {
    console.log("Prev:", prevState.news);
    console.log("Current:", currentState.news);
    if (currentState.news !== prevState.news) {
      console.log("News has updated, need to rerender!!!");
      this.domNode.innerHTML = this.buildNews(currentState);
    } else {
      console.log("News hasn't updated, don't need to rerender!!!")
    }
  }
  getComponent() {
    return this.domNode;
  }
  updateComponent(articles) {
    const newsItems = this.getNews(articles);

    if (this.newsArticles !== newsItems) {
      this.newsArticles = newsItems;
      this.domNode.innerHTML = this.newsArticles;
    }
  }
}
