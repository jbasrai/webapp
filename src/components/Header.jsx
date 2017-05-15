import React from 'react'

export default ({ search, query, onSearchChange, onSearchGo }) => (
    <div className="header">
        <div className="logo-wrapper">
            <img src="/logo.png" className="logo" />
        </div>
        <form className="search-form" action="/search" onSubmit={onSearchGo} >
            <input 
                type="text" 
                className="search-bar" 
                value={search}
                onChange={e => onSearchChange(e.target.value)}
                placeholder={'Search...'} />
            <input type="submit" className="search-submit" value="Submit" />
        </form>
    </div>
)
