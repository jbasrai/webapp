import React from 'react'

export default ({ onChange, onSubmit, placeholder }) => (
    <div className="search-bar">
        <form onSubmit={ onSubmit }>
            <input 
                className="search-field"
                onChange={ onChange } 
                placeholder={ placeholder } />
            <input
                type="submit"
                className="search-submit" />
        </form>
    </div>
)
