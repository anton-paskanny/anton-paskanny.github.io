import { mediaConfig } from './variables';

const getCurrentBreakPointWidth = () => {
    const pageWidth = document.documentElement.clientWidth;

    if (pageWidth < mediaConfig.xsm.maxWidth) {
        return mediaConfig.xsm.maxWidth;
    }

    if (pageWidth < mediaConfig.sm.maxWidth) {
        return mediaConfig.sm.maxWidth;
    }

    if (pageWidth < mediaConfig.md.maxWidth) {
        return mediaConfig.md.maxWidth;
    }

    return 'default';
};

const buildSearchURL = (settings) => {
    let searchURL = `${settings.httpRequest}?`;
    const copySettings = Object.assign({}, settings);
    delete copySettings.httpRequest;

    Object.keys(copySettings).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(copySettings, key)) {
            searchURL += (`${key}=${settings[key]}&`);
        }
    });

    return searchURL.slice(0, searchURL.length - 1);
};

const buildCommonIDForSearchURL = (videos) => {
    let searchID = '';

    videos.forEach((item) => {
        searchID += `${item.id.videoId},`;
    });

    searchID = searchID.slice(0, searchID.length - 1);

    return searchID;
};

const getCorrectPublishedDate = date => date.slice(0, date.indexOf('T'));

const disableSearchElements = () => {
    const searchBtn = document.querySelector('.search-bar__submit');
    const searchInput = document.querySelector('.search-bar__input');
    searchInput.readOnly = true;
    searchBtn.disabled = true;
};

const enableSearchElements = () => {
    const searchBtn = document.querySelector('.search-bar__submit');
    const searchInput = document.querySelector('.search-bar__input');
    searchInput.readOnly = false;
    searchBtn.disabled = false;
};

export {
    getCurrentBreakPointWidth,
    buildSearchURL,
    getCorrectPublishedDate,
    buildCommonIDForSearchURL,
    disableSearchElements,
    enableSearchElements
};
