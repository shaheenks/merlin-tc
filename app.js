// Express Import & instantiate.
const express = require('express');
const app = express();

// Import xml2js for xml enc/dec. 
const xml2js = require('xml2js');
// Import uuid for uuid generation.
const uuid = require('uuid/v4');

// For XML body object parsing.
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

// Main request parser. Application logic goes here.
const requestParser = require('./requestParser')

// builder for JSON to XML conversion.
var builder = new xml2js.Builder();

// Express Middleware for xml parsing.
app.use(bodyParser.xml());

// Port Config for Express.
const PORT = process.env.PORT || 3000;

// Root Endpoint. Dummy Response.
app.get('/', (req, res) => {
    res.send('Merlin MOCK API Server running');
});

// POST method for API calls.
app.post('/api', (req, res) => {
    res.type('application/xml');
    requestParser.handleRequest({
        body: req.body,
        uuid: uuid(),
        ts: new Date()
    })
    .then(response => {
        res.set({'Response-Func': 'Success'});
        res.send(builder.buildObject(response.xmlObj));
        //res.send(r)
    })
    .catch(error => {
        res.set({'Response-Func': 'Failure'});
        res.send(builder.buildObject(error.xmlObj))
    });
    
});

// GET method to download query results.
app.get('/download/:uuid', (req, res) => {
    requestParser.downloadRequest({
        uuid: req.params.uuid
    })
    .then((response) => {
        res.setHeader('Content-type', "application/octet-stream");
        res.setHeader('Content-disposition', `attachment; filename=${req.params.uuid}.csv`);
        res.send(response);
    })
    .catch((error) => {
        console.log(error);
        res.send(error);
    })
});

// Bootstrapping Express Server.
app.listen(PORT, () => {
    console.log('Server running at ' + PORT);
})