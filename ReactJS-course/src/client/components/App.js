import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/Header';
import HeaderDetail from './Header/HeaderDetail';
import MovieResults from '../containers/MovieResults';
import Footer from './Footer/Footer';

const App = () => (
    <Router>
        <div className="app-wrapper">
            <Switch>
                <Route path="/" component={Header} exact/>
                <Route path="/movie/:id" component={HeaderDetail} />
            </Switch>
            <MovieResults />
            <Footer />
        </div>
    </Router>
);

export default App;