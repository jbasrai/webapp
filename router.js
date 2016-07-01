import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import queryService from './queryService'
import axios from 'axios'

const router = express.Router();

router.get('/query', (req, res) => {
    const query = req.query.q;
    const articleType = req.query.articleType;

    queryService
        .search(query, articleType)
        .then(response => response.json())
        .then(data => res.json(data))
});

router.get(/^\/(search)?$/, (req, res) => {
    res.render('index')
})

export default router
