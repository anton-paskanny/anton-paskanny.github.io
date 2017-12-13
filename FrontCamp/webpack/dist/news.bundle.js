webpackJsonp([0],{345:function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function n(n,r){for(var e=0;e<r.length;e++){var i=r[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(r,e,i){return e&&n(r.prototype,e),i&&n(r,i),r}}();e(348);var t=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.newsComponent=this.createComponent(),this.newsArticles=null}return i(n,[{key:"createComponent",value:function(){return document.createElement("div")}},{key:"getNews",value:function(n){var r=this;return n.map(function(n){return'<article class="news-article">\n              '+(n.urlToImage?'<img class="news-article__img" src='+n.urlToImage+" alt='"+n.title+"'>":'<div class="news-article__img"></div>')+'\n              <div class="news-article__text-content">\n                <h2 class="news-article__title">'+n.title+'</h2>\n                <p class="news-article__info-line">\n                  '+(n.author?'<span class="news-article__info-item">\n                      <img class="news-article__info-icon" src="./img/news.svg" alt="Source icon"> '+n.author+"\n                    </span>":"")+"\n                  "+(n.publishedAt?'<span class="news-article__info-item">\n                        <img class="news-article__info-icon" src="./img/calendar.svg" alt="Calendar icon">\n                        '+r.transformPublishedDate(n.publishedAt)+"\n                     </span>":"")+"\n                </p>\n                "+(n.description?'<p class="news-article__desc">'+n.description+"</p>":"")+'\n                <a class="news-article__link" href='+n.url+' target="_blank" title="'+n.title+'...read more">Read more</a>\n              </div>\n       </article>'}).join("")}},{key:"transformPublishedDate",value:function(n){return new Date(n).toLocaleString()}},{key:"build",value:function(n){return this.newsArticles=this.getNews(n),this.newsComponent.className="news-wrapper",this.newsComponent.innerHTML=this.newsArticles,this}},{key:"getComponent",value:function(){return this.newsComponent}},{key:"updateComponent",value:function(n){var r=this.getNews(n);this.newsArticles!==r&&(this.newsArticles=r,this.newsComponent.innerHTML=this.newsArticles)}}]),n}();r.default=t},348:function(n,r,e){var i=e(349);"string"==typeof i&&(i=[[n.i,i,""]]);var t={hmr:!0};t.transform=void 0;e(347)(i,t);i.locals&&(n.exports=i.locals)},349:function(n,r,e){(n.exports=e(346)(!0)).push([n.i,".news-article {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid #032b2f;\r\n}\r\n\r\n.news-article__img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 250px;\r\n  object-fit: cover;\r\n  background-color: #bebebe;\r\n}\r\n\r\n.news-article__info-line {\r\n  margin-top: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.news-article__info-item {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.news-article__info-item:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.news-article__info-icon {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.news-article__title {\r\n  margin: 0;\r\n  margin-top: 10px;\r\n  font-size: 24px;\r\n  line-height: 28px;\r\n}\r\n\r\n.news-article__desc {\r\n  margin: 0;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.news-article__link {\r\n  display: inline-block;\r\n  padding: 6px 10px;\r\n  background-color: #032b2f;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n@media all and (min-width: 641px) {\r\n\r\n  .news-article {\r\n    display: flex;\r\n  }\r\n\r\n  .news-article__img {\r\n    margin-right: 10px;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .news-article__title {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .news-article__img {\r\n    width: 250px;\r\n  }\r\n\r\n}\r\n","",{version:3,sources:["D:/FrontCamp/anton-paskanny.github.io/FrontCamp/webpack/src/components/news-list/styles.css"],names:[],mappings:"AAAA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,iCAAiC;CAClC;;AAED;EACE,eAAe;EACf,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,0BAA0B;CAC3B;;AAED;EACE,iBAAiB;EACjB,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;CACjB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,4BAA4B;CAC7B;;AAED;EACE,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;CACnB;;AAED;EACE,UAAU;EACV,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,kBAAkB;EAClB,0BAA0B;EAC1B,YAAY;EACZ,sBAAsB;CACvB;;AAED;;EAEE;IACE,cAAc;GACf;;EAED;IACE,mBAAmB;IACnB,eAAe;GAChB;;EAED;IACE,cAAc;GACf;;EAED;IACE,aAAa;GACd;;CAEF",file:"styles.css",sourcesContent:[".news-article {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid #032b2f;\r\n}\r\n\r\n.news-article__img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 250px;\r\n  object-fit: cover;\r\n  background-color: #bebebe;\r\n}\r\n\r\n.news-article__info-line {\r\n  margin-top: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.news-article__info-item {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.news-article__info-item:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.news-article__info-icon {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.news-article__title {\r\n  margin: 0;\r\n  margin-top: 10px;\r\n  font-size: 24px;\r\n  line-height: 28px;\r\n}\r\n\r\n.news-article__desc {\r\n  margin: 0;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.news-article__link {\r\n  display: inline-block;\r\n  padding: 6px 10px;\r\n  background-color: #032b2f;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n@media all and (min-width: 641px) {\r\n\r\n  .news-article {\r\n    display: flex;\r\n  }\r\n\r\n  .news-article__img {\r\n    margin-right: 10px;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  .news-article__title {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .news-article__img {\r\n    width: 250px;\r\n  }\r\n\r\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=news.bundle.js.map