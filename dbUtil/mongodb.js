var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/asset" ;

//MongoClient.connect(url,{useNewUrlParser:true })

function connect(callback) {
   MongoClient.connect(url, callback);
};

//Cache the mongodb connection
var dbCache = {};
//connect fn is called here 
connect(function (err, db) {
    if (!err) {
        console.log("Connection with mongodb successful");
        dbCache.db = db;
    } else {
        console.log("Error while connecting to Mongo DB " + err);
        dbCache = {};
    }
});


// we can import this function in some other js file to get the db once its connected
module.exports.getDb = function() {
    return dbCache.db;
}

module.exports.getMongodb = function() {
    return mongodb;    
}

module.exports.connect = connect;

module.exports.ObjectID = mongodb.ObjectID;