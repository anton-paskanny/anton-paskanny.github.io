import React from 'react';

import styles from './styles.css';

export default props => {
    const { title, genres, poster_path, release_date } = props.data;

    function renderGenres(genres) {
        return genres && genres.map((title, index) => (
            index > 0 ?
            <React.Fragment key={title}>
                <li className='movie__genre-list-item--separator'>/</li>
                <li className='movie__genre-list-item'>{title}</li>
            </React.Fragment> :
            <li key={title} className='movie__genre-list-item'>{title}</li>
        ));
    }

    return (
        <article className="movie">
            <figure className="movie__img-placeholder">
                <img className="movie__img"src={poster_path} alt={title}/>
            </figure>
            <div className="movie__info-wrapper">
                <div className="movie__desc-wrapper">
                    <h3 className="movie__title">{title}</h3>
                    <ul className="movie__genres-list">
                        {renderGenres(genres)}
                    </ul>
                </div>
                <time className="movie__release-date" dateTime={release_date}>
                    {release_date.slice(0, 4)}
                </time>
            </div>
        </article>
    )
}