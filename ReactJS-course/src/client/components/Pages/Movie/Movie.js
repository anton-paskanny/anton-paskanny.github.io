import React from 'react';

import HeaderDetail from '../../Header/HeaderDetail';
import MovieResults from '../../../containers/MovieResults';
import Footer from '../../Footer/Footer';

const Movie = ({ match }) => (
    <>
        <HeaderDetail movieId={match.params.id} />
        <MovieResults movieDetailPage={true} />
        <Footer />
    </>
)

export default Movie;