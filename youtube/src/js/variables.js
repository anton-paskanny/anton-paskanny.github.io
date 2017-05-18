const searchConfig = {
    API_KEY: 'AIzaSyB1KcxueEpamEN1oRMJq4JZ9lNkICPICgs',
    SEARCH: 'https://www.googleapis.com/youtube/v3/search',
    VIDEOS: 'https://www.googleapis.com/youtube/v3/videos',
    WATCH: 'https://www.youtube.com/watch?v=',
    CHANNEL: 'https://www.youtube.com/channel/'
};

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
};

const sliderConfig = {
    value: 100,
    units: 'vw'
};

export {
    searchConfig,
    mediaConfig,
    sliderConfig
};
