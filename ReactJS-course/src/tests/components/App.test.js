import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/components/App';

describe('App', () => {
    it('render component correctly', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});

