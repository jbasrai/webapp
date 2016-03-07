import React from 'react'
import Logo from './logo/Logo'
import SearchBar from './searchBar/SearchBar'

export default React.createClass({
    render: function() {
        return (
            <div className="header">
                <Logo />
                <div className="logo-search-bar-spacer" />
                <SearchBar />
            </div>
        );
    }
});
