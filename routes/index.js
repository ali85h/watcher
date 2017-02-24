var express = require('express');
var router = express.Router();

var watchManager = require('../lib/watcherManager');


router.get('/', function(req, res, next) {

    res.send(watchManager.addWatchList());
});

module.exports = router;
