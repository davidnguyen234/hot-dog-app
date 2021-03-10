var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET(all) Get all Address. */
router.get('/', function (req, res, next) {
    // Return all Items
    db.query(
        'SELECT * FROM address',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});
module.exports = router;