var express = require('express'),
    router = express.Router();

router
    // Add a binding to handle '/tests'
    .get('/', function (req, res) {
        res.send("This is version 1 routes..");
    })

module.exports = router;