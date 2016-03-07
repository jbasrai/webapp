import React from 'react'
import SiteResult from './siteResult/SiteResult'

export default React.createClass({
    renderSiteResults: function() {
        return this.props.siteResults.map((siteResult) => {
            const { _id, _source } = siteResult;
            const { content, title, url } = _source;

            return (
                <SiteResult
                    content={ content }
                    title={ title }
                    url={ url }
                    key={ _id }
                />
            );
        });
    },
    render: function() {
        const { name } = this.props;

        return (
            <div className="site">
                <div className="site-name">{ name }</div>
                { this.renderSiteResults() }
            </div>
        );
    }
});