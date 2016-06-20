import React from 'react'

const Hit = ({ content, title, url }) => (
    <div className="hit">
        <a className="hit-title" href={ url }>{ title }</a>
        <div className="hit-url">{ url }</div>
        <div>{ content.slice(0, 100) }</div>
    </div>
)

const Site = ({ site, results }) => (
    <div className="site">
        <h2 className="site-name">{ site }</h2>
        { results.map(({ content, title, url }) =>
            <Hit
                key={ url }
                content={ content }
                title={ title }
                url={ url } /> 
        )}
    </div>
)

export default ({ results }) => {
    return (
        <div className="results">
            { results.map(({ site, results }) =>
                <Site 
                    key={ site }
                    site={ site }
                    results={ results } />
            )}
        </div>
    )
}