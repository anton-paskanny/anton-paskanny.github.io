import React from 'react';

import Search from '../search/Search';

import styles from './styles.css';

const Header = () => (
    <header className="main-header">
        <div className="main-header__inner-wrapper">
            <h1 className="main-header__title common-title">netflixroulette</h1>
            <Search />
        </div>
    </header>
);

export default Header;