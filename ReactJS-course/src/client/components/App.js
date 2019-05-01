import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import MovieInfo from './Pages/Movie/Movie';
import Search from './Pages/Search/Search';
import Footer from './Footer/Footer';

const App = ({ Router, location, context, store}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
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
    </Provider>
);

export default App;
        