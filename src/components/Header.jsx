import React from 'react'
import Logo from './Logo'
import SearchBarContainer from '../containers/SearchBarContainer'

export default () => (
    <div className="header">
        <Logo />
        <div className="logo-search-bar-spacer" />
        <SearchBarContainer />
    </div>
)
