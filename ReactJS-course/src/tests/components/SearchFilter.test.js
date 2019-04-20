import React from 'react';
import { shallow } from 'enzyme';

import SearchFilter from '../../client/components/SearchForm/SearchFilter/SearchFilter';

import { SEARCH_BY_DEFAULT } from '../../client/utils';

let component, props;

describe('Search Filter', () => {
    beforeEach(() => {
        props = {
            searchType: SEARCH_BY_DEFAULT,
            toggleSearch: jest.fn()
        }
        component = shallow(<SearchFilter {...props} />);
    });
    it('render component correctly', () => {
        expect(component).toMatchSnapshot();
    });
    it('should handle search change correctly', () => {
        const event = {
            target: {
                classList: {
                    contains: jest.fn().mockReturnValue(false)
                },
                textContent: 'genres'
            },
            preventDefault: jest.fn()
        }
        component.find('.search-filter__filters').simulate('click', event);
        expect(props.toggleSearch).toHaveBeenCalledWith(event.target.textContent);
    });

    it('should not handle search when the same active item is clicked', () => {
        const event = {
            target: {
                classList: {
                    contains: jest.fn().mockReturnValue(true)
                },
                textContent: SEARCH_BY_DEFAULT
            },
            preventDefault: jest.fn()
        }
        component.find('.search-filter__filters').simulate('click', event);
        expect(props.toggleSearch).not.toHaveBeenCalledWith(event.target.textContent);
    });
});



