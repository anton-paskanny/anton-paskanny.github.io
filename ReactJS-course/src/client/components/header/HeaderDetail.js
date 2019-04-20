import React from 'react';
import { Link } from 'react-router-dom';

import MovieDetail from '../../containers/MovieDetail';

import styles from './styles.css';

const HeaderDetail = (props) => {
    return (
        <header className="main-header">
            <div className="main-header__inner-wrapper">
                <div className="main-header__top-bar">
                    <h1 className="main-header__title common-title">netflixroulette</h1>
                    <Link to="/" className="main-header__back-link">Search</Link>
                </div>
                <MovieDetail id={props.movieId} />
            </div>
        </header>
    )
};

export default HeaderDetail;