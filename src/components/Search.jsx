import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

export default React.createClass({
    render: function() {
        return (
            <div className="results-page">
                <Header />
                <SideBar />
                <Content query={ this.props.query }/>
            </div>
        );
    }
});
