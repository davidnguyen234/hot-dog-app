var express = require('express');
var router = express.Router();

//************************************************************* */
// router.get('/', (req, res, next) => {
//     res.send('Hello dear vendor!');
// });

//CREATE//
router.post('/',(req, res, next) => {
   let mySQLQuery = `INSERT INTO vendor (vendor_id) VALUES (${req.body.vendor_id})`;
   Connection.connect();
   Connection.Query(mySQLQuery, (error, results) => {
      if(error) {
         res.send(500);
      }
      res.status(201).send(results);
      })
   Connection.end();
});

///READ//
 router.get('/',(req, res, next) => {
    let mySQLQuery;
if (req.query.vendor_id){
    mySQLQuery= `SELECT * FROM vendor WHERE vendor_id = '${req.query.vendor_id}'`;
}else{
    mySQLQuery= `SELECT * FROM vendor`;
}
   Connection.connect();
   Connection.Query(mySQLQuery, (error, results) => {
      if(error) {
         res.send(500);
      }
      res.send(results);
      })
   Connection.end();
});

//"/value"
router.get('/:vendor_id', function(req, res,next){     
   let mySQLQuery = `SELECT * FROM vendor WHERE vendor_id= '${req.params.vendor_id}'`;
   Connection.connect();
   Connection.Query(mySQLQuery, (error, results) => {
      if(error) {
         res.send(500);
      }
      res.send(results);
      })
   Connection.end();
});


 //UPDATE
router.put('/:vendor_id',(req, res, next) =>{
   let mySQLQuery = `UPDATE vendor SET employee_id = ${req.body.emploee_id} WHERE vendor_id = ${req.params.vendor_id}`;
   Connection.connect();
   Connection.Query(mySQLQuery, (error, results) => {
      if(error) {
         res.send(500);
      }
      res.send(results);
      })
   Connection.end();
});

// **********************    for loop   *********************** */
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
//************************************************************** */
// GET /vendor – Fetch all the Vendors

// GET /vendor/3– Fetches a specific Vendor with the vendorId 3 (contains vendorId, vendorLocation, vendorPhone, etc…)
// POST /vendor – Creates a new Vendor listing
// PUT /vendor/3 – Updates the Vendor with vendor_id 3

// PATCH /vendor/3 – Updates parts of Vendor with vendorId 3.
//* POST: 404 (Not Found), 409 (Conflict) if resource already exist
//* GET: 200 (OK), single customer. 404 (Not Found), if ID not found or invalid
// PUT: 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid
// PATCH: 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid
// DELETE: 200 (OK). 404 (Not Found), if ID not found or invalid
