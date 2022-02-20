const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');

router.get('/legendaries', function(req, res, next) {
 res.render('index2', { title: 'Express' });
});


module.exports = router