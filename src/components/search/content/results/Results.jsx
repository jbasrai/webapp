import React from 'react'
import $ from 'jquery'
import Site from './site/Site'

export default React.createClass({
    renderSites: function() {
        return this.state.results.map((result) => {
            const name = result[0];
            const siteResults = result[1];
            console.log(name);

            return (
                <Site 
                    name={ name }
                    siteResults={ siteResults }
                    key={ name }
                />
            );
        });
    },
    getInitialState: function() {
        return { results: [] };
    },
    componentDidMount: function() {
        $.get('/query', { q: this.props.query }, function(results) {
            this.setState({ results });
        }.bind(this));
    },
    render: function() {
        return (
            <div className="results">
                { this.renderSites() }
            </div>
        );
    }
});