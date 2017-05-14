import { getCountOfVideosOnSliderPage, getCountOfSliderPages } from '../slider/pages';
import { getPointObj } from '../helpers';
import { getIndexOfActiveToggle, clearActiveToggles, findAndSelectActiveToggle } from '../slider/pagination';

export default function addTouchEvents() {

    const movePoints = {
        start: getPointObj(0, 0),
        end:   getPointObj(0, 0)
    }

    const videoList = document.querySelector('.video-list');
    const pagination = document.querySelector('.pagination');

    let currentLeftPosOfVideoList = 0;
    let counterOfMultiple = 1;

    /* start moving list with videos */
    const touchStartHandler = function(e) {

        console.log('Start touch');

        // add touch class to delete hover state for elements
        document.querySelector('.pagination').classList.add('pagination--can-touch');
        document.querySelector('.pagination').classList.remove('pagination--non-touch');

        counterOfMultiple = getIndexOfActiveToggle(pagination);

        currentLeftPosOfVideoList = 0 - (counterOfMultiple * 100) + 100;

        // register start mouse position
        movePoints.start = e.targetTouches[0].clientX;

    }

    /* moving list with videos */
    const touchMoveHandler = function(e) {

        const leftPos = currentLeftPosOfVideoList  + 'vw';
        const startPointXString = movePoints.start + 'px';
        const currentPointXString = e.changedTouches[0].clientX + 'px';

        const calcXString = `calc(
           ${leftPos} -
           (${startPointXString} - ${currentPointXString})
        )`;

        videoList.style.transform = `translate3D(${calcXString}, 0px, 0px)`;
    }

    /* end moving list with videos */
    const touchEndHandler = function(e) {

        movePoints.end = e.changedTouches[0].clientX;

        const diff = movePoints.end - movePoints.start;
        const leftBorder = 0; // left border for list
        const rightBorder = (getCountOfSliderPages(videoList) * 100) - 200; // right border for list

        // if diff < 0 ---> left
        if (diff < 0) {
            moveToLeft(diff, rightBorder);
        }

        // if diff > 0 ---> right
        if (diff > 0) {
            moveToRight(diff, leftBorder);
        }

        videoList.style.width = `${100 * getCountOfSliderPages(videoList)}vw`;

    }

    const moveToLeft = function(diff, rightBorder) {
        // if current page is the last one - we do nothing
        if (Math.abs(currentLeftPosOfVideoList) >= rightBorder) {
            videoList.style.transform = `translate3D(-${rightBorder}vw, 0px, 0px)`;
        } else {
            currentLeftPosOfVideoList = 0 - (counterOfMultiple * 100);
            videoList.style.transform = `translate3D(${currentLeftPosOfVideoList}vw, 0px, 0px)`;
            counterOfMultiple++;
            findAndSelectActiveToggle(pagination, counterOfMultiple);

            // init custom event to get index of active toggle
            // index will be used to load another part of videos
            // if index is the one before the last --> we load videos
            initLoadPartOfVideosEvent(videoList, counterOfMultiple);
        }
    }

    const moveToRight = function(diff, leftBorder) {
        // if current page is first and we move to the right - return to the initial state
        if (Math.abs(currentLeftPosOfVideoList) <= leftBorder) {
            videoList.style.transform = `translate3D(0px, 0px, 0px)`;
            currentLeftPosOfVideoList = 0;
            counterOfMultiple = 1;
        } else {
            currentLeftPosOfVideoList = currentLeftPosOfVideoList + 100;
            videoList.style.transform = `translate3D(${currentLeftPosOfVideoList}vw, 0px, 0px)`;
            counterOfMultiple--;
            findAndSelectActiveToggle(pagination, counterOfMultiple);
        }
    }

    return {
        touchStartHandler,
        touchMoveHandler,
        touchEndHandler
    }

}

function initLoadPartOfVideosEvent(videoList, indexOfActiveToggle) {
    const loadPartOfVideosEvent = new CustomEvent(
        'loadPartOfVideos', {
            detail: indexOfActiveToggle
        }
    )

    videoList.dispatchEvent(loadPartOfVideosEvent);

    return indexOfActiveToggle;
}
