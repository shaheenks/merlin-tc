const responseBuilder = require('../responseBuilder');
const queries = require('../queryStore').queries;
const parseString = require('xml2js').parseString;

// Your action goes here....
const buildResponse = (callback) => {
    // Calculating a random number between 0 - 9
    var randomNumber = Math.ceil(new Date().getSeconds()/8);
    let obj = queries[randomNumber];
    // Parsing the xml to json from query Store.
    parseString(obj, function (err, result) {
        // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
        if (err) callback(err, {})
        else callback(false, result)
    });
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        // Outputs query parameters if any.
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} query-name ${params.queryName}`);
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} user-name ${params.userName}`);

        buildResponse((err, returnObj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': 'error', 
                        'error-type': 'general'
                    }, 
                    'Source XML parsing failed.'
                );
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Error Response Sent.`)
                // Sending FAILURE response.
                reject(responseObj);
            } else {
                // Building SUCCESS response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': params.requestType
                    },
                    undefined,
                    returnObj
                );
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Success Response Sent.`)
                // Sending SUCCESS response.
                resolve(responseObj)
            }
        });
    });
};

module.exports = {
    handleRequest
};