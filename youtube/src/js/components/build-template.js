import header from './header';
import getSearchBar from './search-bar';
import getVideosWrapperWithList from './video-list';
import getPreloader from './preloader';
import { getPagination } from '../slider/pagination';

export default function buildBasePageTemplate() {
    const searchBarNode = getSearchBar();
    const videoWrapperNode = getVideosWrapperWithList();
    const paginationNode = getPagination();
    const preloaderNode = getPreloader();

    const parentElem = document.body;

    header.appendChild(searchBarNode);
    videoWrapperNode.appendChild(paginationNode);
    videoWrapperNode.appendChild(preloaderNode);

    paginationNode.classList.add('pagination--non-touch');

    parentElem.insertBefore(header, parentElem.children[0]);
    parentElem.insertBefore(videoWrapperNode, parentElem.children[1]);
}
