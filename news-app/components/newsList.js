class newsListClass {
  constructor() {
    this.newsComponent = document.createElement('div');
    this.newsArticles = null;
  }
  getNews(articles) {
    return articles.map(article => {
      const publishedDate = this.transformPublishedDate(article.publishedAt);

      return `<article class="news-article">
                <img class="news-article__img" src=${article.urlToImage} alt=${article.title}>
                <div class="news-article__text-content">
                  <h2 class="news-article__title">${article.title}</h2>
                  <p class="news-article__info-line">
                    <span class="news-article__info-item">
                      <img class="news-article__info-icon" src="./img/news.svg" alt="Source icon">
                      ${article.author}
                    </span>
                    <span class="news-article__info-item">
                      <img class="news-article__info-icon" src="./img/calendar.svg" alt="Calendar icon">
                      ${publishedDate}
                    </span>
                  </p>
                  <p class="news-article__desc">${article.description}</p>
                  <a class="news-article__link" href=${article.url} target="_blank" title="${article.title}...read more">Read more</a>
                </div>
         </article>`
      }).join('');
  };
  transformPublishedDate(date) {
    const newDate = new Date(date);

    return newDate.toLocaleString();
  }
  getComponent(articles) {
    this.newsArticles = this.getNews(articles);

    this.newsComponent.className = 'news-wrapper';

    this.newsComponent.innerHTML = this.newsArticles;

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
