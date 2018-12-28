var express = require('express');
var path = require('path');
var app = express();
var bodyParser= require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
var route = require("./routes/route")
app.use("/routes", route);


app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;



