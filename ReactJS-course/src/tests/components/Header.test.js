import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../client/components/Header/Header';

describe('Header', () => {
    it('render component correctly', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
});



