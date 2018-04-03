import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Filter from '../../client/components/filter/Filter';

configure({ adapter: new Adapter() });

describe('Filter component', () => {

  test('should render Filter component', () => {
    const component = shallow(<Filter />);
    expect(component).toHaveLength(1);
  });

  test('should render correctly', () => {
    const component = renderer.create(<Filter />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should has necessary filterByAuth and blogsLength in props', () => {
    const props = {
      filterByAuthor: jest.fn(),
      blogsLength: 3
    };

    const component = shallow(<Filter {...props} />);

    expect(component.instance().props.filterByAuthor).toBeTruthy();
    expect(component.instance().props.blogsLength).toBeTruthy();
  });
});
