export const URL_BASE = 'https://reactjs-cdp.herokuapp.com/movies';

export const SORT_BY_DEFAULT = 'release_date';
export const SORT_BY_CONFIG = [
    {
        name: SORT_BY_DEFAULT,
        fieldToSortBy: 'release_date'
    },
    {
        name: 'rating',
        fieldToSortBy: 'vote_average'
    }
];

export const SEARCH_BY_DEFAULT = 'title';
export const SEARCH_BY_CONFIG = [
    {
        name: SEARCH_BY_DEFAULT
    },
    {
        name: 'genres'
    }
];

export const throttle = (callback, limit) => {
    var wait = false;                 
    return function () {               
        if (!wait) {                   
            callback.call();           
            wait = true;               
            setTimeout(function () {   
                wait = false;          
            }, limit);
        }
    }
}