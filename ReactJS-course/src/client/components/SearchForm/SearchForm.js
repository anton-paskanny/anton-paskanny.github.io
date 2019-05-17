// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import SearchFilter from '../../containers/SearchFilter';
import SearchInput from './SearchInput/SearchInput';
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary';

type Props = {
  searchType: string,
  history: {
    push: (url: string) => void
  },
  className: string,
}
type State = {
  searchVal: string
}

const SearchPanelTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 1.2em;
  font-weight: normal;
  text-transform: uppercase;
  color: #fff;
`;

class SearchForm extends Component<Props, State> {
    state = {
      searchVal: '',
    }

    handleInputChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
      this.setState({
        searchVal: e.target.value,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      if (!this.state.searchVal.trim()) {
        return;
      }

      this.props.history.push(`/search/${this.state.searchVal.trim()}/${this.props.searchType}`);
    }

    render() {
      return (
            <div className={this.props.className}>
                <SearchPanelTitle>Find your movie</SearchPanelTitle>
                <form onSubmit={this.handleSubmit}>
                    <SearchInput
                        value={this.state.searchVal}
                        handleInputChange={this.handleInputChange}
                    />
                    <SearchFilter />
                </form>
            </div>
      );
    }
}

const styledSearrchForm = styled(SearchForm)`
  position: relative;
  z-index: 3;
`;

export default ErrorBoundary(styledSearrchForm);
