import getVideoItem from '../components/video-item';

const insertVideosToList = function(videos) {
    const videoList = document.querySelector('.video-list');

    videos.items.map((item) => {
       let videoNode =  getVideoItem(item);
       videoList.appendChild(videoNode);
    });
}

export {
    insertVideosToList
}
