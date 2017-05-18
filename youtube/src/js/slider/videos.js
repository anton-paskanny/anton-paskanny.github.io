import getVideoItem from '../components/video-item';

const insertVideosToList = (videos) => {
    const videoList = document.querySelector('.video-list');

    videos.forEach((item) => {
        const videoNode = getVideoItem(item);
        videoList.appendChild(videoNode);
    });
};

export default insertVideosToList;
