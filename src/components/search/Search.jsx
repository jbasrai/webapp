import React from 'react'
import Header from './header/Header'
import SideBar from './sideBar/SideBar'
import Content from './content/Content'

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
