import React from 'react';
import { shallow, mount } from 'enzyme';

import Search from '../../client/components/Search/Search';

let component, instance, props;

describe('Search', () => {
    beforeEach(() => {
        props = { fetchMovies: jest.fn() };
        component = shallow(<Search {...props} />);
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
