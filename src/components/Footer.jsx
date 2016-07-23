import React from 'react'

const Link = ({ name, url }) => (
    <a className="link" href={url}>{name}</a>
)

export default ({ links }) => {
    return (
        <div className="footer">
        { links.map(l => 
            <Link 
                key={l.value}
                name={l.name}
                url={l.url} />
        )}
        </div>
    )
}