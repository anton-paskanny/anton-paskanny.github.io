import React from 'react';
import { shallow } from 'enzyme';

import MovieResults from '../../client/components/MovieResults/MovieResults';

import { movieItem, movies } from '../mocks/dataMock';

let component, props, sortBy, event;

describe('SortPanel', () => {
    beforeEach(() => {
        sortBy = [
            {
                name: 'release date',
                fieldToSortBy: 'release_date',
                active: true
            },
            {
                name: 'rating',
                fieldToSortBy: 'vote_average',
                active: false
            }
        ];
        props = { 
            fetchMovies: jest.fn(),
            movies,
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
    it('should correctly update state on handleSortByChange event', () => {
        event.target.classList.contains = jest.fn().mockReturnValue(false);
        component.instance().handleSortByChange(event);
        expect(component.state().sortBy[1].active).toBe(true);
    });
    it('should not update state on handleSortByChange event when active item was selected', () => {
        event.target.classList.contains = jest.fn().mockReturnValue(true);
        component.instance().handleSortByChange(event);
        expect(component.state().sortBy[1].active).toBe(false);
    });
    it('should display Spinner when movies are fetching', () => {
        component.setProps({ isFetching: true });
        expect(component.find('.results__items--fetching').length).toBe(1);
    });
    it('should not show any movies', () => {
        component.setProps({ movies: [] });
        expect(component.find('.results__no-items').length).toBe(1);
    });
});