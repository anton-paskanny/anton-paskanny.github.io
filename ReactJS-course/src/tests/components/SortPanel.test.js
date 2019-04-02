import React from 'react';
import { shallow } from 'enzyme';

import SortPanel from '../../client/components/MovieResults/SortPanel/SortPanel';

import { movieItem, movies } from '../mocks/dataMock';

let component, props, sortByConfig;

describe('SortPanel', () => {
    beforeEach(() => {
        sortByConfig = [
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
        props = { sortByConfig, movies };
        component = shallow(<SortPanel {...props} />);
    });
    it('render component correctly', () => {
        expect(component).toMatchSnapshot();
    });
    it('should contain list with sort items', () => {
        expect(component.find('.sort-panel__filter-item')).toHaveLength(sortByConfig.length);
    });
    it('should contain several genres in render output', () => {
        component.setProps({
            selectedMovie: movieItem
        });
        expect(component.find('.sort-panel__results-counter').text()).toMatch(/genres/);
    });
    it('should contain one genre in render output', () => {
        movieItem.genres = ['Adventure'];
        component.setProps({
            selectedMovie: movieItem
        });
        expect(component.find('.sort-panel__results-counter').text()).toMatch(/genre/);
    });
    it('should contain one movie in render output', () => {
        movieItem.genres = ['Adventure'];
        component.setProps({
            movies: [ movieItem ]
        });
        expect(component).toMatchSnapshot();
        expect(component.find('.sort-panel__results-counter').text()).toMatch(/movie/);
    });
    it('should not rendere anything when no movies were received', () => {
        component.setProps({
            movies: []
        });
        expect(component).toMatchSnapshot();
        expect(component.find('.sort-panel').length).toBe(0);
    });
});



