import React from 'react';

export default ({ onChange, onSubmit }) => (
    <div className="search-bar">
        <form onSubmit={ onSubmit }>
            <input 
                className="search-field"
                onChange={ onChange } />
            <input
                type="submit"
                className="search-submit" />
        </form>
    </div>
);
