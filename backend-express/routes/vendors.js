var express = require('express');
var router = express.Router();
// const venRouts = require('../data/vendors.json');

router.get('/', function(req, res, next) {
    res.send('Hello dear vendor!');
   // res.send(venRouts);
});
// router.get('/:id', function (req, res, next) {

//     let Id = req.params.id;
//     let obj = {}
//     for (let i = 0; i < venRouts.length; i++) {
//         if (Id == venRouts[i].id) {
//             obj = venRouts[i];
            
//         }

//     }
//     res.send(obj)
// });
module.exports = router;