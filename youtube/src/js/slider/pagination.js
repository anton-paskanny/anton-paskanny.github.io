import { getCountOfSliderPages } from './pages';
import { mediaConfig, sliderConfig } from '../variables';

const getPaginationToggle = (number) => {
    const toggle = document.createElement('a');
    toggle.className = 'pagination__link';
    toggle.innerHTML = number.toString();

    return toggle;
};

const getPagination = () => {
    const pagination = document.createElement('nav');
    pagination.className = 'pagination';

    return pagination;
};

const clearActiveToggles = () => {
    const activeToggle = document.querySelector('.pagination__link--active');

    if (activeToggle !== null) activeToggle.classList.remove('pagination__link--active');
};

const updatePaginationToggles = (settings, needsToSelectActive) => {
    const pagination = document.querySelector('.pagination');
    const videoList = document.querySelector('.video-list');

    const countOfSliderPages = getCountOfSliderPages(videoList);
    const oldCountOfPaginationToggles = pagination.childElementCount;

    for (let pageNumber = oldCountOfPaginationToggles + 1; pageNumber < countOfSliderPages; pageNumber += 1) {
        const paginationToggle = getPaginationToggle(pageNumber);

        paginationToggle.addEventListener('click', (event) => {
            const coordX = -settings.value * (pageNumber - 1);
            clearActiveToggles();
            event.target.classList.add('pagination__link--active');
            videoList.style.transform = `translate3d(${coordX}${settings.units}, 0px, 0px)`;
        });

        pagination.appendChild(paginationToggle);
    }

    if (needsToSelectActive === true) {
        clearActiveToggles();
        pagination.children[0].classList.add('pagination__link--active');
        videoList.style.transform = 'translate3d(0px, 0px, 0px)';
    }
};

const updatePaginationTogglesOnResize = (updatePaginationNavs) => {
    const mediaQuery = [
        window.matchMedia(`all and (max-width: ${mediaConfig.md.maxWidth}${mediaConfig.md.units})`),
        window.matchMedia(`all and (max-width: ${mediaConfig.sm.maxWidth}${mediaConfig.sm.units}`),
        window.matchMedia(`all and (max-width: ${mediaConfig.xsm.maxWidth}${mediaConfig.xsm.units})`)
    ];

    const isMoveListToStartPosition = true;
    const pagination = document.querySelector('.pagination');

    mediaQuery.forEach((item) => {
        item.addListener(() => {
            pagination.innerHTML = '';
            updatePaginationNavs(sliderConfig, isMoveListToStartPosition);
        });
    });
};

const getIndexOfActiveToggle = (pagination) => {
    if (pagination.children.length === 0) return false;

    let index = null;

    for (let i = 0, length = pagination.children.length; i < length; i += 1) {
        if (pagination.children[i].classList.contains('pagination__link--active')) {
            index = i + 1;
            break;
        }
    }

    return index;
};

const findAndSelectActiveToggle = (pagination, index) => {
    clearActiveToggles();
    pagination.children[index - 1].classList.add('pagination__link--active');
};

export {
    updatePaginationToggles,
    getPagination,
    getIndexOfActiveToggle,
    clearActiveToggles,
    findAndSelectActiveToggle,
    updatePaginationTogglesOnResize
};
