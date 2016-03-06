import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './src/App'

const router = express.Router();
const AppFactory = React.createFactory(App);

router.get('/results', function(req, res) {
    const $App = AppFactory({});
    const reactHtml = ReactDOM.renderToString($App);
    res.render('results', { reactHtml: reactHtml });
});

export default router;