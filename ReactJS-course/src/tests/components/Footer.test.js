import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../client/components/Footer/Footer';

describe('Footer', () => {
    it('render component correctly', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
});



