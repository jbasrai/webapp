import React from 'react';
import Results from './Results';

export default React.createClass({
    render: function() {
        return (
            <div className="content">
                <Results query={ this.props.query }/>
            </div>
        );
    }
});
