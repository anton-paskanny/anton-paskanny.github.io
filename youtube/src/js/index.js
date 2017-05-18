import buildBasePageTemplate from './components/build-template';
import { searchConfig } from './variables';
import { updatePaginationToggles, updatePaginationTogglesOnResize } from './slider/pagination';
import AddMouseEvents from './events/mouseEventsHandler';
import AddTouchEvents from './events/touchEventsHandler';
import youtubeHttpRequest from './youtube/youtubeHttpRequest';
import { disableSearchElements } from './helpers';

buildBasePageTemplate();

const videoList = document.querySelector('.video-list');
const pagination = document.querySelector('.pagination');
const searchBar = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-bar__input');
const searchBtn = document.querySelector('.search-bar__submit');
const preloader = document.querySelector('.preloader');

const defaultSearchSettings = {
    httpRequest: searchConfig.SEARCH,
    key: searchConfig.API_KEY,
    type: 'video',
    part: 'snippet',
    maxResults: '15',
    q: searchInput.value || 'javascript'
};

let isMoveListToStartPosition = null;


/* ------SEARCH------ */
searchBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (searchInput.value !== '') {
        videoList.innerHTML = '';
        pagination.innerHTML = '';

        defaultSearchSettings.q = searchInput.value;
        preloader.classList.add('preloader--show');

        disableSearchElements();

        isMoveListToStartPosition = true;

        youtubeHttpRequest(defaultSearchSettings, searchBar, isMoveListToStartPosition);

        /* ------UPDATE NAVS------ */
        updatePaginationTogglesOnResize(updatePaginationToggles);
    }
});


/* ------TOUCH EVENTS------ */
const touchEvents = new AddTouchEvents();

videoList.addEventListener('touchstart', touchEvents.touchStartHandler);
videoList.addEventListener('touchmove', touchEvents.touchMoveHandler);
videoList.addEventListener('touchend', touchEvents.touchEndHandler);


/* ------MOUSE EVENTS------ */
const mouseEvents = new AddMouseEvents();

videoList.addEventListener('mousedown', mouseEvents.mouseDownHanlder);
videoList.addEventListener('mousemove', mouseEvents.mouseMoveHandler);
videoList.addEventListener('mouseup', mouseEvents.mouseUpHandler);


/* ------RESPONSE EVENT------ */
let nextPageToken = '';

searchBar.addEventListener('response', (event) => {
    nextPageToken = event.detail;
});


/* ------LOAD ANOTHER PART OF VIDEOS------ */
videoList.addEventListener('loadPartOfVideos', (event) => {
    const lastPageIndex = pagination.children.length - 1;

    isMoveListToStartPosition = false;

    if (lastPageIndex - (event.detail - 1) === 1) {
        const searchSettings = Object.assign({}, defaultSearchSettings);
        searchSettings.nextPageToken = nextPageToken;
        youtubeHttpRequest(searchSettings, searchBar, isMoveListToStartPosition);
    }
});

const css = require('../scss/style.scss');
