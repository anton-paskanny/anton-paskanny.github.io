import { mediaConfig } from '../variables';
import { getCurrentBreakPointWidth } from '../helpers';

const getCountOfVideosOnSliderPage = () => {
    const currentPageWidth = getCurrentBreakPointWidth();

    switch (currentPageWidth) {
    case mediaConfig.xsm.maxWidth: return 1;
    case mediaConfig.sm.maxWidth: return 2;
    case mediaConfig.md.maxWidth: return 3;
    default: return 4;
    }
};

const getCountOfSliderPages = videoList =>
    Math.ceil(videoList.childElementCount / getCountOfVideosOnSliderPage()) + 1;

export {
    getCountOfVideosOnSliderPage,
    getCountOfSliderPages
};
