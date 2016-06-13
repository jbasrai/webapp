import React from 'react'
import SiteResult from './SiteResult'

export default ({ name, siteResults }) => (
    <div className="site">
        <div className="site-name">{ name }</div>
        { siteResults.map(({ content, title, url }) => (
            <SiteResult
                content={ content }
                title={ title }
                url={ url }
                key={ url }
            />
        )) }
    </div>
)
