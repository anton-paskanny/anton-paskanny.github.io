const getVideosWrapperWithList = () => {
    const videosWrapper = document.createElement('div');
    const videosList = document.createElement('ul');

    videosWrapper.className = 'video-list-wrapper';
    videosList.className = 'video-list';

    videosWrapper.appendChild(videosList);

    return videosWrapper;
};

export default getVideosWrapperWithList;
