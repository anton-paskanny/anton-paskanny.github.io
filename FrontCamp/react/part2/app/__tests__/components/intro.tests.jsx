import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Intro from '../../client/components/intro/Intro';

configure({ adapter: new Adapter() });

describe('Intro component', () => {
  test('should render Intro component', () => {
    const component = shallow(<Intro />);
    expect(component).toHaveLength(1);
  });
});
