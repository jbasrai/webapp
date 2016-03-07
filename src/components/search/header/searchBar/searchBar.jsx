import React from 'react'

export default React.createClass({
    render: function() {
        return (
            <div className="search-bar">
                <input className="search-field" />
                <div className="search-field-search-submit-spacer" />
                <button className="search-submit">Go</button>
            </div>
        );
    }
});