import React from 'react';
import { shallow, mount } from 'enzyme';

import Search from '../../client/components/Search/Search';

let component, instance, props;

describe('Search', () => {
    beforeEach(() => {
        props = { fetchMovies: jest.fn() };
        component = mount(<Search {...props} />);
        instance = component.instance();
    });

    it('render component correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change state on handleInputChange', () => {
        const event = {
            target: {
                value: 'X-men'
            }
        };
        instance.handleInputChange(event);
        expect(component.state().searchVal).toBe(event.target.value);
    });

    it('should change state when search option was changed', () => {
        const event = {
            preventDefault: jest.fn(),
            target: {
                classList: {
                    contains: jest.fn().mockReturnValue(false)
                },
                textContent: 'genres'
            }
        };
        instance.handleSearchByChange(event);
        expect(component.state().searchBy[1].active).toBe(true);
    });

    it('should not change state when active search option was selected', () => {
        const event = {
            preventDefault: jest.fn(),
            target: {
                classList: {
                    contains: jest.fn().mockReturnValue(true)
                },
                textContent: 'genres'
            }
        };
        instance.handleSearchByChange(event);
        expect(component.state().searchBy[0].active).toBe(true);
    });

    it('should fetch new movie on submit event', () => {
        const event = {
            target: {
                value: 'X-men'
            },
            preventDefault: jest.fn()
        };
        instance.handleInputChange(event);
        instance.handleSubmit(event);
        expect(props.fetchMovies).toHaveBeenCalled();
    });

    it('should not fetch new movie on submit event - search value is empty', () => {
        const event = {
            target: {
                value: ''
            },
            preventDefault: jest.fn()
        };
        instance.handleInputChange(event);
        instance.handleSubmit(event);
        expect(props.fetchMovies).not.toHaveBeenCalled();
    });
});
