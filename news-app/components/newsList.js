class newsListClass {
  getNews(articles) {
    return articles.map(article => (
      `<article class="news-article">
          <img class="news-article__img" src=${article.urlToImage} alt=${article.title}>
          <div class="news-article__text-content">
            <h2 class="news-article__title">${article.title}</h2>
            <p class="news-article__desc">${article.description}</p>
            <a class="class="news-article__link" href=${article.url} target="_blank">Read more</a>
          </div>
       </article>`
    )).join('');
  }
  generateTemplate(articles) {
    const newsItems = this.getNews(articles),
          newsComponent = document.createElement('div');

    newsComponent.className = 'news-wrapper';

    newsComponent.innerHTML = newsItems;

    return newsComponent;
  }
}

/*
<figure class="news-article__img-wrapper">
  <img class="news-article__img" src=${article.urlToImage} alt=${article.title}>
</figure>
*/
