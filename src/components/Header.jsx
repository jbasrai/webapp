import React from 'react'

export default ({ search, query, onSearchChange, onSearchGo }) => (
    <div className="header">
        <img src="/logo.png" className="logo" />
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
