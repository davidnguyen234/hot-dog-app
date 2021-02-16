var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
let myCredentials = require('../../../dbCreds.json');
const connection = mysql.createConnection(myCredentials);
//const vendorRouter= require('./routes/vendor');
//app.use('/vendor', vendorRouter);
//************************************************************* */
// router.get('/', (req, res, next) => {
//     res.send('Hello dear vendor!');
// });

//CREATE//
router.post('/',(req, res, next) => {
   let mySQLQuery3 =  `INSERT INTO Address ( address_id, address_street, address_suite, address_zip, address_city,address_state) VALUES    (${req.body.address_id},'${req.body.address_street}',${req.body.address_suite},${req.body.address_zip},'${req.body.city}','${req.body.address_state}')`;
   let mySQLQuery2 =  `INSERT INTO Employee (employee_id, employee_first_name, employee_last_name, employee_phone, employee_salary) VALUES (${req.body.employee_id},'${req.body.employee_first_name}','${req.body.employee_last_name}',${req.body.employee_phone},${req.body.employee_salary})`;
   let mySQLQuery1 =  `INSERT INTO Vendor (vendor_id, employee_id, address_id) VALUES (${req.body.vendor_id},${req.body.employee_id},${req.body.address_id})`;
   //connection.connect();
   connection.query(mySQLQuery2, (error, results) => {
      if(error) {
         console.log(error);
         res.sendStatus(500);
      }else {
         res.send(results);
      } 
      })
   //connection.end();
});

///Returns all the data in this route//
 router.get('/',(req, res, next) => {
    let mySQLQuery=  `SELECT * FROM vendor WHERE vendor_id = '${req.params.id}'`;
if (req.params.id){
    mySQLQuery= `SELECT * FROM vendor WHERE vendor_id = '${req.params.id}'`;
}else{
    mySQLQuery= `SELECT * FROM vendor`;
}
   //connection.connect();
   connection.query(mySQLQuery, (error, results) => {
      if(error) {
         res.sendStatus(500);
      }else {
         res.send(results);
      } 
      })
   //connection.end();
});

// Returns /value"
router.get('/:id',(req, res, next) => {
   let mySQLQuery=  `SELECT * FROM vendor WHERE vendor_id = '${req.params.id}'`;
if (req.params.id){
   mySQLQuery= `SELECT * FROM vendor WHERE vendor_id = '${req.params.id}'`;
}else{
   mySQLQuery= `SELECT * FROM vendor`;
}
  //connection.connect();
  connection.query(mySQLQuery, (error, results) => {
     if(error) {
        res.sendStatus(500);
     }else {
        res.send(results);
     }
     })
  //connection.end();
});

 //UPDATE
// router.put('/:vendor_id',(req, res, next) =>{
//    let mySQLQuery = `UPDATE vendor SET employee_id = ${req.body.emploee_id} WHERE vendor_id = ${req.params.vendor_id}`;
//    Connection.connect();
//    Connection.Query(mySQLQuery, (error, results) => {
//       if(error) {
//          res.send(500);
//       }
//       res.send(results);
//       })
//    Connection.end();
// });

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


// connection.query(
//   'SELECT * FROM `Employee`',
//   function (err, results) {
//     if (err) {
//       console.log(err);
//     }
//     console.log(results); // results contains rows returned by server

//   }
// );


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
