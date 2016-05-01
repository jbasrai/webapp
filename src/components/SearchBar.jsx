import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="search-bar">
                <input className="search-field" />
                <button className="search-submit">Search</button>
            </div>
        );
    }
});