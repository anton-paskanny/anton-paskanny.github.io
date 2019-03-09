import React, { Component } from 'React';

import SortPanel from './sortPanel/SortPanel';


class Results extends Component {
    render() {
        return (
            <div className="results">
                <SortPanel />
                <div className="results__items">
                    No items were found
                </div>
            </div>
        )
    }
}

export default Results;