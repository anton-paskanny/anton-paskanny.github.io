import React from 'react';

import HeaderDetail from '../../Header/HeaderDetail';
import MovieResults from '../../../containers/MovieResults';

const Movie = ({ match }) => (
    <>
        <HeaderDetail movieId={match.params.id} />
        <MovieResults movieDetailPage={true} />
    </>
)

export default Movie;