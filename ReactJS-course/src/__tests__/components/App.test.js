import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../client/components/App';

test('Render correctly App component', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
});

