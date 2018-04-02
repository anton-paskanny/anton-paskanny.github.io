import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Intro from '../../client/components/intro/Intro';

configure({ adapter: new Adapter() });

describe('Intro component', () => {
  test('should render Intro component', () => {
    const component = shallow(<Intro />);
    expect(component).toHaveLength(1);
  });

  test('should render correctly', () => {
    const component = renderer.create(<Intro />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
