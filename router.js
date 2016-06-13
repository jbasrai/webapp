import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import queryService from './queryService'
import axios from 'axios'

const router = express.Router();

router.get('/search', function(req, res) {
    // todo: implement server-side rendering
    var query = req.query;
    queryService
        .search(query)
        .then(({ data }) => JSON.stringify(data))
        .then(results => res.render('search', { results }));
});

router.get('/query', function(req, res) {
    var query = req.query;
    queryService
        .search(query)
        .then(({ data }) => res.json(data));
});

export default router;

