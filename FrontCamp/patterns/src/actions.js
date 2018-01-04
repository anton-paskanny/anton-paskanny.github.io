/*
 * Actions describe the fact that something happened,
 * but don't specify how the application's state changes in response
 */


/*
 * action types
 */
export const ADD_NEWS = 'ADD_NEWS';
export const ADD_SOURCES = 'ADD_SOURCES';


/*
 * action creators
 */
export const addNews = (data) => ({
    type: ADD_NEWS,
    news: data
})

export const addSources = (data) => ({
    type: ADD_SOURCES,
    sources: data
})
