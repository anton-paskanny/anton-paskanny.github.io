import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import MovieInfo from './Pages/Movie/Movie';
import Search from './Pages/Search/Search';
import Footer from './Footer/Footer';

const App = () => (
    <Router>
        <div className="app-wrapper">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/movie/:id" component={MovieInfo} exact />
                <Route path="/search/:searchVal/:searchType" component={Search} exact/>
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default App;
        