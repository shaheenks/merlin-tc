const express = require('express');
const app = express();
const xml2js = require('xml2js');
const uuid = require('uuid/v4');
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const requestParser = require('./requestParser')

var builder = new xml2js.Builder();

app.use(bodyParser.xml());

const PORT = process.env.PORT || 3010;

app.get('/', (req, res) => {
    res.send('MOCK API Server running');
});

app.post('/api', (req, res) => {
    let requestParams = {
        body: req.body,
        uuid: uuid(),
        ts: new Date()
    };
    console.log(`${new Date().toISOString()} ${requestParams.uuid} Request received`);
    res.type('application/xml');
    requestParser.handleRequest(requestParams)
    .then(r => {
        console.log(`${new Date().toISOString()} ${requestParams.uuid} Success response`);
        res.send(builder.buildObject(r.xmlObj));
        //res.send(r)
    })
    .catch(e => {
        console.log(`${new Date().toISOString()} ${requestParams.uuid} Reject Response`);
        res.send(builder.buildObject(e.xmlObj))
    });
    
});

app.get('/download/:uuid', (req, res) => {
    res.set('application/csv');
    console.log(req.params.uuid)
    res.send('Name,Value,Test,'+req.params.uuid)
});

app.listen(PORT, () => {
    console.log('Server running at ' + PORT);
})