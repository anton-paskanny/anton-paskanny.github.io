import { header as headerNode } from './header';
import { getSearchBar } from './search-bar';
import { getVideosWrapperWithList } from './video-list';
import { getPreloader } from './preloader';
import { getPagination } from '../slider/pagination';

export default function buildBasePageTemplate() {
    let searchBarNode = getSearchBar();
    let videoWrapperNode = getVideosWrapperWithList();
    let paginationNode = getPagination();
    let preloaderNode = getPreloader();

    let parentElem = document.body;

    headerNode.appendChild(searchBarNode);
    videoWrapperNode.appendChild(paginationNode);
    videoWrapperNode.appendChild(preloaderNode);

    paginationNode.classList.add('pagination--non-touch');

    parentElem.insertBefore(headerNode, parentElem.children[0]);
    parentElem.insertBefore(videoWrapperNode, parentElem.children[1]);
}
