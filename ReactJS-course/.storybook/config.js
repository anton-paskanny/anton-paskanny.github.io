import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';

import { CSSNormalize, GlobalDefaults } from '../src/client/commonStyles';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = (cb) => (
  <React.Fragment>
    <CSSNormalize />
    <GlobalDefaults />
    {cb()}
  </React.Fragment>
);

addDecorator(withGlobal);
configure(loadStories, module);
