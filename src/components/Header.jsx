import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default () => (
    <div className="header">
        <Logo />
        <div className="logo-search-bar-spacer" />
        <SearchBar />
    </div>
);
