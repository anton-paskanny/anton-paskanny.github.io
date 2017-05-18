import { getCountOfSliderPages } from '../slider/pages';
import { getIndexOfActiveToggle, findAndSelectActiveToggle } from '../slider/pagination';

function initLoadPartOfVideosEvent(videoList, indexOfActiveToggle) {
    const loadPartOfVideosEvent = new CustomEvent(
        'loadPartOfVideos', {
            detail: indexOfActiveToggle
        }
    );

    videoList.dispatchEvent(loadPartOfVideosEvent);

    return indexOfActiveToggle;
}

export default function AddMouseEvents() {
    const movePoints = {
        start: 0,
        end: 0
    };

    const videoList = document.querySelector('.video-list');
    const pagination = document.querySelector('.pagination');

    let mouseState = 0;
    let currentLeftPosOfVideoList = 0;
    let counterOfMultiple = 1;

    /* handler for moving to left*/
    const moveToLeft = (diff, rightBorder) => {
        // if current page is the last one - we do nothing
        if (Math.abs(currentLeftPosOfVideoList) >= rightBorder) {
            videoList.style.transform = `translate3D(-${rightBorder}vw, 0px, 0px)`;
        } else {
            currentLeftPosOfVideoList = 0 - (counterOfMultiple * 100);
            videoList.style.transform = `translate3D(${currentLeftPosOfVideoList}vw, 0px, 0px)`;
            counterOfMultiple += 1;
            findAndSelectActiveToggle(pagination, counterOfMultiple);

            // init custom event to get index of active toggle
            // index will be used to load another part of videos
            // if index is the one before the last --> we load videos
            initLoadPartOfVideosEvent(videoList, counterOfMultiple);
        }
    };

    /* handler for moving to right*/
    const moveToRight = (diff, leftBorder) => {
        // if current page is first and we move to the right - return to the initial state
        if (Math.abs(currentLeftPosOfVideoList) <= leftBorder) {
            videoList.style.transform = 'translate3D(0px, 0px, 0px)';
            currentLeftPosOfVideoList = 0;
            counterOfMultiple = 1;
        } else {
            currentLeftPosOfVideoList += 100;
            videoList.style.transform = `translate3D(${currentLeftPosOfVideoList}vw, 0px, 0px)`;
            counterOfMultiple -= 1;
            findAndSelectActiveToggle(pagination, counterOfMultiple);

            // init custom event to get index of active toggle
            // index will be used to load another part of videos
            // if index is the one before the last --> we load videos
            initLoadPartOfVideosEvent(videoList, counterOfMultiple);
        }
    };

    /* start moving list with videos */
    const mouseDownHanlder = (e) => {
        // prevent selection of list with videos
        e.preventDefault();

        // remove touch class to return normal hover state for toggles
        document.querySelector('.pagination').classList.add('pagination--non-touch');
        document.querySelector('.pagination').classList.remove('pagination--can-touch');

        // set mouseState to 1 to show the mouse btn is pressed
        mouseState = 1;

        counterOfMultiple = getIndexOfActiveToggle(pagination);

        currentLeftPosOfVideoList = (0 - (counterOfMultiple * 100)) + 100;

        // register start mouse position
        movePoints.start = e.clientX;
    };

    /* moving list with videos */
    const mouseMoveHandler = (e) => {
        if (e.which !== 1) return;

        if (mouseState !== 1) return;

        // prevent selection of list with videos
        e.preventDefault();

        const leftPos = `${currentLeftPosOfVideoList}vw`;
        const startPointXString = `${movePoints.start}px`;
        const currentPointXString = `${e.clientX}px`;

        const calcXString = `calc(
           ${leftPos} -
           (${startPointXString} - ${currentPointXString})
        )`;

        videoList.style.transform = `translate3D(${calcXString}, 0px, 0px)`;
    };

    /* end moving list with videos */
    const mouseUpHandler = (e) => {
        mouseState = 0;

        movePoints.end = e.clientX;

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
    };

    return {
        mouseDownHanlder,
        mouseMoveHandler,
        mouseUpHandler
    };
}
