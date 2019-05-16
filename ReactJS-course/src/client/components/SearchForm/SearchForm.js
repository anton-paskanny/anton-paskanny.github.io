// @flow
import React, { Component } from 'react';

import SearchFilter from '../../containers/SearchFilter';
import SearchInput from './SearchInput/SearchInput';
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary';

import './styles.css';

type Props = {
  searchType: string,
  history: {
    push: (url: string) => void
  }
}
type State = {
  searchVal: string
}

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
            <div className="search-panel">
                <h2 className="search-panel__title">Find your movie</h2>
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

export default ErrorBoundary(SearchForm);
