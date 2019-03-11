import React from 'react';

import Header from './header/Header';
import Results from './results/Results';
import Footer from './footer/Footer';

const App = () => (
    <div className="app-wrapper">
        <Header />
        <Results />
        {Footer}
    </div>
);

export default App;