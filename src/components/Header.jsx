import React from 'react'
export default ({ searchTerm }) => (
    <div className="header">
        <img src="/logo.png" className="logo" />
        <form className="search-form" action="/search">
            <input 
                type="text" 
                name="q" 
                className="search-bar" 
                placeholder={ searchTerm } />
            <button className="search-submit">Submit</button>
        </form>
    </div>
)
