import React from 'react'
import ArticleType from './filters/ArticleType'
import Specialty from './filters/Specialty'

export default React.createClass({
    render: function() {
        return (
            <div className="side-bar">
                <ArticleType />
                <Specialty />
            </div>
        );
    }
});
