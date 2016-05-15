import Search from './components/Search';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/search';

const results = window.results;

ReactDOM.render(<Search results={ results }/>, 
    document.getElementById('react-mount'));
