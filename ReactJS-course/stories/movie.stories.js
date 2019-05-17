import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import Movie from '../src/client/components/Movie/Movie';

import { movieItem } from '../src/tests/mocks/dataMock';

storiesOf('Movie item', module)
    .add('by default', () => <Router><Movie data={movieItem}/></Router>)