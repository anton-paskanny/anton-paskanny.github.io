import { getCountOfVideosOnSliderPage, getCountOfSliderPages } from './pages';
import { mediaConfig } from '../variables';

const getPaginationToggle = function(number) {
    let toggle = document.createElement('a');
    toggle.className = 'pagination__link';
    toggle.innerHTML = number + '';

    return toggle;
}

const getPagination = function() {
    let pagination = document.createElement('nav');
    pagination.className = 'pagination';

    return pagination;
}

const clearActiveToggles = function() {
    let activeToggle = document.querySelector('.pagination__link--active');

    if (activeToggle !== null) activeToggle.classList.remove('pagination__link--active');
}

const updatePaginationToggles = function(settings, needsToSelectActive) {

    const pagination = document.querySelector('.pagination');
    const videoList = document.querySelector('.video-list');

    const countOfSliderPages = getCountOfSliderPages(videoList);
    const oldCountOfPaginationToggles = pagination.childElementCount;

    for (let pageNumber = oldCountOfPaginationToggles + 1; pageNumber < countOfSliderPages; pageNumber++) {

        const paginationToggle = getPaginationToggle(pageNumber);

        paginationToggle.addEventListener('click', function(event) {
            let coordX = -settings.value * (pageNumber - 1);
            clearActiveToggles();
            event.target.classList.add('pagination__link--active');
            videoList.style.transform = `translate3d(${coordX}${settings.units}, 0px, 0px)`;
        });

        pagination.appendChild(paginationToggle);
    }

    if (needsToSelectActive === true) {
        clearActiveToggles();
        pagination.children[0].classList.add('pagination__link--active');
        videoList.style.transform = `translate3d(0px, 0px, 0px)`;
    }
}

const updatePaginationTogglesOnResize = function(updatePaginationNavs, pagination) {
    let mediaQuery = [
        window.matchMedia(`all and (max-width: ${mediaConfig.md.maxWidth}${mediaConfig.md.units})`),
        window.matchMedia(`all and (max-width: ${mediaConfig.sm.maxWidth}${mediaConfig.sm.units}`),
        window.matchMedia(`all and (max-width: ${mediaConfig.xsm.maxWidth}${mediaConfig.xsm.units})`)
    ];

    let isMoveListToStartPosition = true;

    mediaQuery.forEach((item) => {
        item.addListener((data) => {
            if (data.matches){
                pagination.innerHTML = '';
                updatePaginationNavs({value: 100, units: 'vw'}, isMoveListToStartPosition);
            } else {
                pagination.innerHTML = '';
                updatePaginationNavs({value: 100, units: 'vw'}, isMoveListToStartPosition);
            }
        });
    });
}

const getIndexOfActiveToggle = function(pagination) {
    if (pagination.children.length === 0) return false;

    for (let i = 0, length = pagination.children.length; i < length; i++) {
        if (pagination.children[i].classList.contains('pagination__link--active')) {
            return i + 1;
        }
    }
}

const findAndSelectActiveToggle = function(pagination, index) {
    clearActiveToggles();
    pagination.children[index - 1].classList.add('pagination__link--active');
}



export {
    updatePaginationToggles,
    getPagination,
    getIndexOfActiveToggle,
    clearActiveToggles,
    findAndSelectActiveToggle,
    updatePaginationTogglesOnResize
}
