import { buildSearchURL, enableSearchElements } from '../helpers';
import insertVideosToList from '../slider/videos';
import { updatePaginationToggles } from '../slider/pagination';

const getFullVideoInfo = (settings, isMoveListToStartPosition) => {
    const searchRequest = new XMLHttpRequest();
    const searchURL = buildSearchURL(settings);

    searchRequest.onreadystatechange = function getResponse() {
        if (this.readyState === 4 && this.status === 200) {
            const videos = JSON.parse(searchRequest.responseText);

            // insert videos into list
            insertVideosToList(videos.items);

            // build pagination for videos
            updatePaginationToggles({ value: 100, units: 'vw' }, isMoveListToStartPosition);

            // make search elements enable
            enableSearchElements(
               document.querySelector('.search-bar__input'),
               document.querySelector('.search-bar__submit')
            );

            document.querySelector('.preloader').classList.remove('preloader--show');
        }
    };

    searchRequest.open('GET', searchURL, true);
    searchRequest.send();
};

export default getFullVideoInfo;
