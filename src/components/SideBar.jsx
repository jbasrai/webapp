import React from 'react';
import ArticleType from './ArticleType';
import Specialty from './Specialty';

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
