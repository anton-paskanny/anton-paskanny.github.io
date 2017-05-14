import { mediaConfig } from './variables';

const getCurrentBreakPointWidth = function() {
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
}

const buildSearchURL = function(settings) {
    let searchURL = `${settings.httpRequest}?`;
    let copySettings = Object.assign({}, settings);
    delete copySettings['httpRequest'];

    for (let key in copySettings) {
        searchURL += (`${key}=${settings[key]}&`);
    };

    return searchURL.slice(0, searchURL.length - 1);
}

const buildCommonIDForSearchURL = function(videos) {
    let searchID = '';

    videos.items.map((item) => {
        searchID += item.id.videoId + ',';
    });

    searchID = searchID.slice(0, searchID.length - 1);

    return searchID;
}

const getCorrectPublishedDate = function(date) {
    return date.slice(0, date.indexOf('T'));
}

const getPointObj = function(x, y) {
    return { x, y };
}

const disableSearchElements = function(searchInput, searchBtn) {
    searchInput.readOnly = true;
    searchBtn.disabled = true;
}

const enableSearchElements = function(searchInput, searchBtn) {
    searchInput.readOnly = false;
    searchBtn.disabled = false;
}

export {
    getCurrentBreakPointWidth,
    buildSearchURL,
    getCorrectPublishedDate,
    buildCommonIDForSearchURL,
    getPointObj,
    disableSearchElements,
    enableSearchElements
}
