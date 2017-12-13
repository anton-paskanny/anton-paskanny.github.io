import "./styles.css";

export default class NewsList {
  constructor() {
    this.newsComponent = this.createComponent();
    this.newsArticles = null;
  }
  createComponent() {
    return document.createElement('div');
  }
  getNews(articles) {
    return articles.map(article => (
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
  build(articles) {
    this.newsArticles = this.getNews(articles);
    this.newsComponent.className = 'news-wrapper';
    this.newsComponent.innerHTML = this.newsArticles;

    return this;
  }
  getComponent() {
    return this.newsComponent;
  }
  updateComponent(articles) {
    const newsItems = this.getNews(articles);

    if (this.newsArticles !== newsItems) {
      this.newsArticles = newsItems;
      this.newsComponent.innerHTML = this.newsArticles;
    }
  }
}
