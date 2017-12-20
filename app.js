var express = require('express');
var app =  express();
var path = require('path');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var apiController = require('./controller/apiController.js');


app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.get('/object/:key', apiController.apiValueGET);

app.post('/object', urlencodedParser, apiController.apiPOST);

app.listen(3000);
console.log('Running on port 3000...')
