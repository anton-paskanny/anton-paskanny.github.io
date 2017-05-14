import { getCorrectPublishedDate } from '../helpers';
import { searchConfig } from '../variables';

const getVideoItem = function(data) {
    let videoItem = document.createElement('li');
    let publishedDate = getCorrectPublishedDate(`${data.snippet.publishedAt}`);
    let videoImage = `<img
                        class="video-item__preview"
                        src="${data.snippet.thumbnails.default.url}"
                        srcset="${data.snippet.thumbnails.medium.url} 1x, ${data.snippet.thumbnails.high.url} 2x"
                        alt="${data.snippet.title}"
                      >`;
    let videoDesc = `${data.snippet.description}`;

    videoDesc = videoDesc.slice(0, 100) + '...';

    // videoItem.setAttribute("ondrag", "return false");
    // videoItem.setAttribute("ondragdrop", "return false");
    // videoItem.setAttribute("ondragstart", "return false");

    videoItem.className = 'video-item';
    videoItem.innerHTML = `<figure class="video-item__preview-wrapper">
                                ${videoImage}
                                <figcaption class="video-item__title">
                                    <a href="${searchConfig.WATCH}${data.id}" title="${data.snippet.title}" target="_blank">${data.snippet.title}</a>
                                </figcaption>
                            </figure>
                            <ul class="video-item__list">
                                <li class="video-item__list-item">
                                    <a class="video-item__author" href="${searchConfig.CHANNEL}${data.snippet.channelId}" title="${data.snippet.channelTitle}" target="_blank">
                                        <i class="icon-user-circle-o"></i>
                                        ${data.snippet.channelTitle}
                                    </a>
                                </li>
                                <li class="video-item__list-item">
                                    <i class="icon-calendar"></i>&nbsp;${publishedDate}
                                </li>
                                <li class="video-item__list-item">
                                    <i class="icon-eye"></i>&nbsp;${data.statistics.viewCount}
                                </li>
                            </ul>
                            <p class="video-item__desc">${videoDesc}</p>`;

    return videoItem;
}

export default getVideoItem;
