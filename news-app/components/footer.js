class Footer {
  getComponent() {
    const footer = document.createElement('footer');

    footer.className = 'footer';

    footer.innerHTML = '<p>Powered by <a href="https://newsapi.org/" title="NewsAPI">NewsAPI.org</a></p>'

    return footer;
  }
}
