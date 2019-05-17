import React from 'react';
import styled from 'styled-components';

const Footer = ({ className }) => (
    <footer className={className}>
        <p className="main-footer__title common-title">netflixroulette</p>
    </footer>
);

export default styled(Footer)`
    margin-top: 70px;
    padding: 20px 20%;
    background-color: var(--secondary-color);
`;
