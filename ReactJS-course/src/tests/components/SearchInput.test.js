import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from '../../client/components/Search/SearchInput/SearchInput';

let component, props;

describe('Movie', () => {
    beforeEach(() => {
        props = {
            value: '',
            handleInputChange: jest.fn()
        }
        component = shallow(<SearchInput {...props} />);
    });
    it('render component correctly', () => {
        expect(component).toMatchSnapshot();
    });
    it('should invoke onChange handler', () => {
        component.find('input').simulate('change');
        expect(props.handleInputChange).toHaveBeenCalled();
    });
});



