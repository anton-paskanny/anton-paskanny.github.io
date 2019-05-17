import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import SearchResult from '../src/client/containers/SearchResult';

import configureStore from '../src/client/modules/configureStore';

const store = configureStore();

storiesOf('SearchResult', module)
    .add('by default', () => <Provider store={store}><Router><SearchResult /></Router></Provider>)