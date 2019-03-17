import React from 'react';

import Search from '../search/Search';

import styles from './styles.css';

const Header = () => (
    <header className="main-header">
        <h1 className="main-header__title common-title">netflixroulette</h1>
        <Search />
    </header>
);

export default Header;