import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';

import { SEARCH_BY_DEFAULT } from '../src/client/utils';

import SearchForm from '../src/client/containers/SearchForm';

import configureStore from '../src/client/modules/configureStore';

const store = configureStore();
const history = {
    push: () => {}
}

storiesOf('SearchForm', module)
    .add('by default', () => <Provider store={store}><SearchForm searchType={SEARCH_BY_DEFAULT} history={history}/></Provider>)