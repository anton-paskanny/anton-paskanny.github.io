import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AsyncComp from './shared/AsyncComp/AsyncComp';
import Footer from './Footer/Footer';

const AsyncHome = AsyncComp(() => import("./Pages/Home/Home"));
const AsyncNotFound = AsyncComp(() => import("./Pages/NotFound/NotFound"));
const AsyncMovieInfo = AsyncComp(() => import("./Pages/Movie/Movie"));
const AsyncSearch = AsyncComp(() => import("./Pages/Search/Search"));

const App = ({ Router, location, context, store}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <div className="app-wrapper">
                <Switch>
                    <Route path="/" component={AsyncHome} exact />
                    <Route path="/movie/:id" component={AsyncMovieInfo} exact />
                    <Route path="/search/:searchVal/:searchType" component={AsyncSearch} exact/>
                    <Route component={AsyncNotFound} />
                </Switch>
                <Footer />
            </div>
        </Router>
    </Provider>
);

export default App;