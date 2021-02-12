var express = require('express');
var router = express.Router();
// const venRouts = require('../data/vendors.json');
//const connection = mysql.createConnection(appCred);

router.get('/', function(req, res, next) {
    res.send('Hello dear vendor!');
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


// GET /vendor – Fetch all the Vendors

// GET /vendor/3– Fetches a specific Vendor with the vendorId 3 (contains vendorId, vendorLocation, vendorPhone, etc…)
// POST /vendor – Creates a new Vendor listing
// PUT /vendor/3 – Updates the Vendor with vendor_id 3
// DELETE /vendor/3 – Deletes the Vendor with vendorId 3
// PATCH /vendor/3 – Updates parts of Vendor with vendorId 3.

module.exports = router;