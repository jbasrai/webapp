import Search from './components/Search';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/search';

const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const query = getParameterByName('q');

ReactDOM.render(<Search query={ query }/>, document.getElementById('react-mount'));
