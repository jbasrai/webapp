import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import queryService from './queryService'
import axios from 'axios'
// import App from './src/components/search/Search'

const router = express.Router();

router.get('/search', function(req, res) {
    // ** disabled server side rendering for now until I can fix things
    // const $Main = ReactFactory({});
    // const reactHtml = ReactDOM.renderToString($Main);
    const query = req.query;
    // const app = React.createElement(App, { query });
    // const reactHtml = ReactDOM.renderToString(app):
    res.render('results', {});
});

router.get('/query', function(req, res) {
    var query = req.query;

    queryService
        .search(query)
        .then(function({ data }) {
            res.json(data);
        });
});

export default router;

