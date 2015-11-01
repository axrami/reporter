var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
var parseString = require('xml2js').parseString;

/* GET home page. */
router.get('/', function (req, res, next) {
    request(options, callback);
    res.render('index');
});


function basicGet() {
    request('http://lpmobile-test-results.s3.amazonaws.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
};

var options = {
    url: 'http://lpmobile-test-results.s3.amazonaws.com'
};

function callback(error, response, body) {
    if(!error && response.statusCode == 200) {
        parseXML(body);
    }
}

function parseXML(xmlResponse) {
    parseString(xmlResponse, function(err, result) {
        console.log(result);
        console.log(JSON.stringify(result));
    });

}


module.exports = router;
