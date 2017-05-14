const getVideosWrapperWithList = function() {
    let videosWrapper = document.createElement('div');
    let videosList = document.createElement('ul');

    videosWrapper.className = 'video-list-wrapper';
    videosList.className = 'video-list';

    videosWrapper.appendChild(videosList);

    return videosWrapper;
};

export { getVideosWrapperWithList };
