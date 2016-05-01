import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';

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
