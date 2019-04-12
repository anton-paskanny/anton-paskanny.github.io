import React from 'react';
import { shallow } from 'enzyme';

import SortPanel from '../../client/components/MovieResults/SortPanel/SortPanel';

import { movieItem, movies } from '../mocks/dataMock';
import { SORT_BY_CONFIG } from '../../client/utils';

let component, props;

describe('SortPanel', () => {
    beforeEach(() => {
        props = { sortType: 'release_date', movies, toggleSort: jest.fn() };
        component = shallow(<SortPanel {...props} />);
    });
    it('render component correctly', () => {
        expect(component).toMatchSnapshot();
    });
    it('should contain list with sort items', () => {
        expect(component.find('.sort-panel__filter-item')).toHaveLength(SORT_BY_CONFIG.length);
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
    it('should toggle sort type', () => {
        const event = {
            target: {
                classList: {
                    contains: jest.fn().mockReturnValue(false)
                },
                textContent: 'rating'
            }
        }
        component.find('.sort-panel__filters').simulate('click', event);
        expect(props.toggleSort).toHaveBeenCalled();
    });
    it('should not toggle sort when the same active item is clicked', () => {
        const event = {
            target: {
                classList: {
                    contains: jest.fn().mockReturnValue(true)
                }
            }
        }
        component.find('.sort-panel__filters').simulate('click', event);
        expect(props.toggleSort).not.toHaveBeenCalled();
    })
});



