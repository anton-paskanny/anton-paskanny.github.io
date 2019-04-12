import React from 'react';
import { shallow } from 'enzyme';

import MovieResults from '../../client/components/MovieResults/MovieResults';

import { movieItem, movies } from '../mocks/dataMock';
import { SORT_BY_DEFAULT } from '../../client/utils';

let component, props, event;

describe('SortPanel', () => {
    beforeEach(() => {
        props = { 
            fetchMovies: jest.fn(),
            fetchMoviesByGenres: jest.fn(),
            movies,
            sortType: SORT_BY_DEFAULT,
            selectedMovie: null,
            moviesForSelectedMovie: [],
            isFetching: false
        };
        event = {
            target: {
                classList: {},
                textContent: 'rating'
            }
        }
        component = shallow(<MovieResults {...props} />);
    });
    it('render component correctly', () => {
        expect(component).toMatchSnapshot();
    });
    it('should display Spinner when movies are fetching', () => {
        component.setProps({ isFetching: true });
        expect(component.find('.results__items--fetching').length).toBe(1);
    });
    it('should not show any movies', () => {
        component.setProps({ movies: [] });
        expect(component.find('.results__no-items').length).toBe(1);
    });
    it('should fetch movies with genres of selected movie', () => {
        component.setProps({
            selectedMovie: movieItem,
            moviesForSelectedMovie: movies
        });
        component.instance().componentDidUpdate({});

        expect(props.fetchMoviesByGenres).toHaveBeenCalled();
    });
    it('should fetch data for updated selected movie', () => {
        component.setProps({
            selectedMovie: movieItem
        });
        component.instance().componentDidUpdate({
            selectedMovie: {
                title: 'Test title'
            }
        });

        expect(props.fetchMoviesByGenres).toHaveBeenCalled();
    });
    it('selected movie was deleted from received array of movies', () => {
        component.setProps({
            selectedMovie: movieItem,
            moviesForSelectedMovie: [ movieItem ]
        });

        expect(component.find('.results__no-items')).toBeTruthy();
    });
    it('should display movies for selected one', () => {
        const fieldToSortBy = 'vote_average';
        const sortedMovies = movies.sort((a, b) => b[fieldToSortBy] - a[fieldToSortBy]);
        
        component.setProps({
            sortType: fieldToSortBy
        });
        
        expect(component.find('Movie').first().prop('data').id).toEqual(sortedMovies[0].id);
    });
});