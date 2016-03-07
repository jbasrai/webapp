import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
// import Main from './src/components/Main'

const router = express.Router();
// const ReactFactory = React.createFactory(Main);

router.get('/results', function(req, res) {
    // ** disabled server side rendering for now until I can fix things
    // const $Main = ReactFactory({});
    // const reactHtml = ReactDOM.renderToString($Main);
    res.render('results', {});
});

export default router;