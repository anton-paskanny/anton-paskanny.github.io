const getSearchBar = function() {
    let searchBarNode = document.createElement('div');
    searchBarNode.className = 'search-bar';
    searchBarNode.innerHTML = `<form class="search-bar__form" method="POST">
                        <input class="search-bar__input" type="text" placeholder="Type something...">
                        <button class="search-bar__submit" type="submit"><i class="icon-search"></i></button>
                    </form>`;

    return searchBarNode;
};

export { getSearchBar };
