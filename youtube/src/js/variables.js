const searchConfig = {
    API_KEY: 'AIzaSyB1KcxueEpamEN1oRMJq4JZ9lNkICPICgs',
    SEARCH: 'https://www.googleapis.com/youtube/v3/search',
    VIDEOS: 'https://www.googleapis.com/youtube/v3/videos',
    WATCH: 'https://www.youtube.com/watch?v=',
    CHANNEL: 'https://www.youtube.com/channel/'
}

const mediaConfig = {
    md: {
        maxWidth: 1200,
        units: 'px'
    },
    sm: {
        maxWidth: 768,
        units: 'px'
    },
    xsm: {
        maxWidth: 460,
        units: 'px'
    }
}

const videoListEvenstConfig = {
    MOVE_STEP_IN_VW: 100,
    CURRENT_LEFT_POS_FOR_VIDEO_LIST_IN_VW: 0,
    COUNT_OF_PAGE_FOR_LOAD_VIDEOS: 2
}

export {
    searchConfig,
    mediaConfig,
    videoListEvenstConfig
}
