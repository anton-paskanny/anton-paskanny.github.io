import { searchConfig } from '../variables';
import { buildSearchURL, buildCommonIDForSearchURL } from '../helpers';
import getFullVideoInfo from './getFullVideoInfo';

function initResponseEvent(searchBar, data) {
    const responseEvent = new CustomEvent(
        'response', {
            detail: data
        }
    );

    searchBar.dispatchEvent(responseEvent);

    return data;
}

const youtubeHttpRequest = (settings, searchBar, isMoveListToStartPosition) => {
    const searchRequest = new XMLHttpRequest();
    const searchURL = buildSearchURL(settings);

    searchRequest.onreadystatechange = function getResponse() {
        if (this.readyState === 4 && this.status === 200) {
            const videos = JSON.parse(searchRequest.responseText);

            const videoRequestSettings = {
                httpRequest: searchConfig.VIDEOS,
                key: searchConfig.API_KEY,
                part: 'snippet,statistics',
                id: ''
            };

            videoRequestSettings.id = buildCommonIDForSearchURL(videos.items);

            // make anothet request to get full info includijng count of video views
            getFullVideoInfo(videoRequestSettings, isMoveListToStartPosition);

            // init custom event to get nextPageToken
            initResponseEvent(searchBar, videos.nextPageToken);
        }
    };

    searchRequest.open('GET', searchURL, true);
    searchRequest.send();
};

export default youtubeHttpRequest;
