import React from 'react'

export default ({ title, children }) => {
    const renderedChildren = children.map(c => (
        <li>{ c }</li> 
    ))

    return (
        <div className="list">
            <h3>{ title }</h3>
            <ul>{ renderedChildren }</ul>
        </div>
    )
}