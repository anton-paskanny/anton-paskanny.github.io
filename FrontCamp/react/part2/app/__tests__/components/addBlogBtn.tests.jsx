import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddBlogBtn from '../../client/components/addBlogBtn/AddBlogBtn';

configure({ adapter: new Adapter() });

describe('AddBlogBtn component', () => {
  test('should render AddBlogBtn component', () => {
    const component = shallow(<AddBlogBtn />);
    expect(component).toHaveLength(1);
  });
});
