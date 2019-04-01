import React from 'react';
import { shallow } from 'enzyme';

import Movie from '../../client/components/Movie/Movie';

import { movieItem } from '../mocks/dataMock';

let component;
let props;

describe('Movie', () => {
    beforeEach(() => {
        props = movieItem;
        component = shallow(<Movie data={props} />);
    });
    it('render component correctly', () => {
        expect(component).toMatchSnapshot();
    });
    it('should contain Link with selected movie id', () => {
        expect(component.find('Link').prop('to')).toBe(`/movie/${props.id}`);
    });
});



