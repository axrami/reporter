var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
var parseString = require('xml2js').parseString;

router.get('/', function (req, res, next) {
    requestJSON();
    res.json(responseJson);
});

var responseJson;

function requestJSON() {
    request('http://lpmobile-test-results.s3.amazonaws.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            parseString(response, function(err, result) {
                parseXML(body);
            })
        }
    });
}

function parseXML(xmlResponse) {
    parseString(xmlResponse, function (err, result) {
        responseJson = JSON.stringify(result);
    });
}

module.exports = router;