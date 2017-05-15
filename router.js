import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import queryService from './queryService'
import fetch from 'isomorphic-fetch'

const router = express.Router();
const analytics = process.env.ANALYTICS + '/query'
console.log(analytics)

router.get('/query', (req, res) => {
    const { q, articleType, specialty } = req.query

    queryService
        .search(q, articleType, specialty)
        .then(response => response.json())
        .then(data => res.json(data))

    fetch(analytics, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            term: q,
            articleType: articleType,
            ip: req.ip
        })
    }).then(() => {
        console.log('sent to analytics')
    }, err => console.log(err))
});

router.get(/^\/(search)?$/, (req, res) => {
    res.render('index')
})

export default router
