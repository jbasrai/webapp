import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

export default ({ results }) => (
    <div className="results-page">
        <Header />
        <SideBar />
        <Content results={ results }/>
    </div>
);
