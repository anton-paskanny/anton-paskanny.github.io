import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

const NotFound = (props) => {
    return (
      <div className="not-found__container">
        <div className="not-found__bg" />
        <h1 className="not-found__title">404</h1>
        <p className="not-found__desc">
          The page you are looking for wasn't found
        </p>
        <Link to="/" className="not-found__link">Main page</Link>
      </div>
    )
}

export default NotFound;