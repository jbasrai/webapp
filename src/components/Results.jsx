import React from 'react'
import { INITIAL, LOADING, NOT_FOUND, READY } from '../values/results'

const Hit = ({ content, title, url }) => (
    <div className="hit">
        <a className="hit-title" href={ url }>{ title }</a>
        <div className="hit-url">{ url }</div>
        <div 
            className="hit-contents" 
            dangerouslySetInnerHTML={ {__html: content} } />
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

const Message = ({ children }) => (
    <div className="message">{ children }</div>
)

const Results = ({ results }) => {
    return (
        <div className="results">
            { results
                .filter(({ site, results }) => results.length > 0)
                .map(({ site, results }) =>
                    <Site 
                        key={ site }
                        site={ site }
                        results={ results } />
                )}
        </div>
    )
}

export default ({ results }) => {
    switch (results.status) {
        case INITIAL:
            return <Message>Try a query in the box above</Message>
        case NOT_FOUND:
            return <Message>Results not found</Message>
        case LOADING:
            return <Message>Loading...</Message>
        case READY:
            return <Results results={ results.body } />
    }
}
