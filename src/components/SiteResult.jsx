import React from 'react';

export default React.createClass({
    render: function() {
        const { title, content, url } = this.props;

        return (
            <div className="site-result">
                <a
                    href={ url }
                    className="article-title">
                    { title }
                </a>
                <div className="article-url">{ url }</div>
                <div className="article-content">{ content.substring(0, 100) }</div>
            </div>
        );
    }
});