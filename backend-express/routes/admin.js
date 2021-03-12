var express = require('express');
var router = express.Router();
var db = require('../db');

// Get all the data from the given table name
router.get('/:tableName', function (req, res, next) {
    db.query(
        'SELECT * FROM '+ req.params.tableName +' ORDER BY '+ req.params.tableName +'_id;',
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