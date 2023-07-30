var express = require('express');
var app = express();

// import File System Module
var fs = require("fs");

// import xml2js Module
var { parseString }  = require("xml2js");

//xml data
var xmldata = '<?xml version=”1.0" encoding=”UTF-8"?>' +
    '<Student>' +
    '<PersonalInformation>' +
    '<FirstName>Sravan</FirstName>' +
    '<LastName>Kumar</LastName>' +
    '<Gender>Male</Gender>' +
    '</PersonalInformation>' +
    '<PersonalInformation>' +
    '<FirstName>Sudheer</FirstName>' +
    '<LastName>Bandlamudi</LastName>' +
    '<Gender>Male</Gender>' +
    '</PersonalInformation>' +
    '</Student>';

// parsing xml data

fs.readFile( '/Users/mac/Documents/testEmtechBatch-ptstmts.xml', function (err, data) {
   if (err) {
      throw err;
   }
   // console.log(data.toString());
   parseString(data, function (err, results) {

// parsing to json
      let data = JSON.stringify(results)

// display the json data
      console.log("results",data);
   });
});


app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
