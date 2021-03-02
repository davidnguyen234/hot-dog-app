var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET(all) Items. */
router.get('/', function (req, res, next) {
    // Return all Items
    console.log("On Menu Route");
    db.query('SELECT * FROM `Inventory`', (err, results) => {
        if (!err) {
            res.send(results);
        } else {
            console.log(err);
        }
    }
    );
});

module.exports = router;