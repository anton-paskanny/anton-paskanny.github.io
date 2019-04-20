import React from 'react';
import { withRouter } from 'react-router-dom'

import SearchForm from '../../containers/SearchForm';

import styles from './styles.css';

const SearchFormWithRouter = withRouter(({ history }) => <SearchForm history={history} />);

const Header = () => (
    <header className="main-header">
        <div className="main-header__inner-wrapper">
            <h1 className="main-header__title common-title">netflixroulette</h1>
            <SearchFormWithRouter />
        </div>
    </header>
);

export default Header;