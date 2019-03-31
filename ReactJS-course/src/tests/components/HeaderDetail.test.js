import React from 'react';
import { shallow } from 'enzyme';

import HeaderDetail from '../../client/components/Header/HeaderDetail';

const MATCH_ID = 123;

let component;
let match;

describe('HeaderDetail', () => {
    beforeEach(() => {
        match = {params: { id: MATCH_ID } };
        component = shallow(<HeaderDetail match={match} />);
    });
    it('render component correctly', () => {
        expect(component).toMatchSnapshot();
    });
    it('should render MovieDetail with passed id in params', () => { 
        expect(component.find('.main-header__back-link').prop('to')).toBe('/'); 
    });
    it('should render link to main page', () => {
        expect(component.find('Connect(MovieDetail)').props().id).toBe(MATCH_ID);
    });
});



