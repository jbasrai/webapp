import React from 'react'
import $ from 'jquery'
import Site from './Site'

export default ({ results }) => (
    <div className="results">
        { results.map(({ site, results }) => (
            <Site 
                name={ site }
                siteResults={ results }
                key={ site }
            />
        )) }
    </div>
)
