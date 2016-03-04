const router = require('express').Router();

router.get('/results', function(req, res) {
    res.render('results', { reactHtml: 'world' });
});

module.exports = router;