import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import HeaderDetail from './header/HeaderDetail';
import MovieResults from './movie-results/MovieResults';
import Footer from './footer/Footer';

const App = () => (
    <div className="app-wrapper">
        <Switch>
            <Route path="/" component={Header} exact/>
            <Route path="/movie/:id" component={HeaderDetail} />
        </Switch>
        <MovieResults />
        <Footer />
    </div>
);

export default App;