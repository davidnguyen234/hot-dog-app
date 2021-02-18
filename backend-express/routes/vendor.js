var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
let myCredentials = require('../../../dbCreds.json');
const connection = mysql.createConnection(myCredentials);
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
module.exports = router;