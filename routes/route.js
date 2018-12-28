var express = require("express");
var router = express.Router();
var mongodb = require("../dbUtil/mongodb");

router.post('/saveAsset', function (req, res) {
   var db = mongodb.getDb();
   var data = req.body;    
   db.collection("mycoll").insert(data)
});
/*router.post('/updateUser', function (req, res) {
    var db = mongodb.getDb();
    var data = req.body;    
    db.collection("mycoll").save({_id:ObjectId(),data})      
});*/
/*router.post('/deleteAsset', function (req, res) {
    var db = mongodb.getDb();
    var data = req.body;    
    db.collection("mycoll").delete(data)   
});*/
router.get('/getAllAssets', function (req, res) {
    var db = mongodb.getDb();
    var coll = db.collection("mycoll");
    coll.find({}).toArray(function (err, data) {
        res.send(data);
    });
}); 

// On localhost:3000/welcome
router.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

module.exports = router;


