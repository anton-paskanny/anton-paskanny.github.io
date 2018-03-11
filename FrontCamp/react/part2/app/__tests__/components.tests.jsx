import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddBlogBtn from '../client/components/addBlogBtn/AddBlogBtn';
import Intro from '../client/components/intro/Intro';
import Filter from '../client/components/filter/Filter';
import Overlay from '../client/components/overlay/Overlay';


configure({ adapter: new Adapter() });

describe('Intro', () => {
  test('should render Intro component', () => {
    const component = shallow(<Filter />);
    expect(component).toHaveLength(1);
  });
});

describe('Overlay', () => {
  test('should render Overlay component', () => {
    const component = shallow(<Overlay />);
    expect(component).toHaveLength(1);
  });
});

describe('Filter', () => {
  test('should render Filter component', () => {
    const component = shallow(<Filter />);
    expect(component).toHaveLength(1);
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

describe('AddBlogBtn', () => {
  test('should render AddBlogBtn component', () => {
    const component = shallow(<AddBlogBtn />);
    expect(component).toHaveLength(1);
  });
});
