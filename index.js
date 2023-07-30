var express = require('express');
var app = express();

// import File System Module
var fs = require("fs");
require('dotenv').config()

// import xml2js Module
var {parseString} = require("xml2js");

// parsing xml data
fs.readFile(process.env.FILE_PATH, function (err, data) {
    if (err) {
        throw err;
    }
    // console.log(data.toString());
    parseString(data, function (err, results) {

// parsing to json
        let data = JSON.stringify(results)

// display the json data
        console.log("results", data);
    });
});


app.get('/', function (req, res) {
    res.send("Hello world!");
});

app.listen(3000);
