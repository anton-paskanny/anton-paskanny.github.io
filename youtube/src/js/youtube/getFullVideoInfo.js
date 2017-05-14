import { buildSearchURL, enableSearchElements } from '../helpers';
import { insertVideosToList } from '../slider/videos';
import { buildPagination, updatePaginationToggles } from '../slider/pagination';
import getVideoItem from '../components/video-item';

const getFullVideoInfo = function(settings, isMoveListToStartPosition) {

    let searchRequest = new XMLHttpRequest();
    let searchURL = buildSearchURL(settings);

    searchRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           let videos = JSON.parse(searchRequest.responseText);

           // insert videos into list
           insertVideosToList(videos);

           // build pagination for videos
           updatePaginationToggles({value: 100, units: 'vw'}, isMoveListToStartPosition);

           // make search elements enable
           enableSearchElements(
               document.querySelector('.search-bar__input'),
               document.querySelector('.search-bar__submit')
           );

           document.querySelector('.preloader').classList.remove('preloader--show');

        }
    };

    searchRequest.open("GET", searchURL, true);
    searchRequest.send();
};

export default getFullVideoInfo;
