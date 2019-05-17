import React from 'react';
import styled from 'styled-components';

const SearchInput = ({ className, value, handleInputChange }) => (
  <input name="movie"
        className={className}
        value={value}
        onChange={handleInputChange}
  />
);

export default styled(SearchInput)`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  background-color: var(--secondary-color);
  border: none;
  border-bottom: 3px solid var(--primary-color);
`;
