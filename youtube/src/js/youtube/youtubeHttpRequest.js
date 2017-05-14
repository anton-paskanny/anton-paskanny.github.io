import { searchConfig } from '../variables';
import { buildSearchURL, buildCommonIDForSearchURL } from '../helpers';
import getFullVideoInfo from './getFullVideoInfo';

const youtubeHttpRequest = function(settings, searchBar, isMoveListToStartPosition) {
    let searchRequest = new XMLHttpRequest();
    let searchURL = buildSearchURL(settings);

    searchRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           let videos = JSON.parse(searchRequest.responseText);

           let videoRequestSettings = {
               httpRequest: searchConfig.VIDEOS,
               key: searchConfig.API_KEY,
               part: 'snippet,statistics',
               id: ''
           };

           videoRequestSettings.id = buildCommonIDForSearchURL(videos);

           // make anothet request to get full info includijng count of video views
           getFullVideoInfo(videoRequestSettings, isMoveListToStartPosition);

           // init custom event to get nextPageToken
           initResponseEvent(searchBar, videos.nextPageToken);
        }
    };

    searchRequest.open("GET", searchURL, true);
    searchRequest.send();
}

function initResponseEvent(searchBar, data) {
    const responseEvent = new CustomEvent(
        'response', {
            detail: data
        }
    );

    searchBar.dispatchEvent(responseEvent);

    return data;
}

export default youtubeHttpRequest;
