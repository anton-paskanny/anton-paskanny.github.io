import React, { PureComponent } from 'react';


class SearchFilter extends PureComponent {
    render() {
        console.log("Render search filter");

        return (
            <div className="search-by">
                    <p>Search by</p>
                    <ul>
                        <li>
                            <button>Title</button>
                        </li>
                        <li>
                            <button>Genre</button>
                        </li>
                    </ul>
                    <button onSubmit={this.props.handleSubmit}>
                        Search
                    </button>
            </div>
        )
    }
}

export default SearchFilter;