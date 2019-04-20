import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import MovieInfo from './Pages/Movie/Movie';
import Search from './Pages/Search/Search';

const App = () => (
    <Router>
        <div className="app-wrapper">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/movie/:id" component={MovieInfo} />
                <Route path="/search/:searchVal/:searchType" component={Search} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default App;

/* <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/movie/:id" component={TestKek} />
    <Route path="/search/:query" component={SearchResult} />
    <Route component={NotFound} />
</Switch> */

// <Switch>
//     <Route path="/" component={Home} />
//     <Route path="/not-found" component={NotFound} />
// </Switch>
        