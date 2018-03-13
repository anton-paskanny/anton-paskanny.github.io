import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Overlay from '../../client/components/overlay/Overlay';

configure({ adapter: new Adapter() });

describe('Overlay component', () => {
  test('should render Overlay component', () => {
    const component = shallow(<Overlay />);
    expect(component).toHaveLength(1);
  });
});
