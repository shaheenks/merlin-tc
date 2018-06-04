const responseBuilder = require('../responseBuilder');
const inputTypes = require('../inputTypes').inputTypes;
const parseString = require('xml2js').parseString;

// Your action goes here....
const buildResponse = (callback) => {
    let obj = {};

    parseString(inputTypes, function (err, result) {
        // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
        if (err) callback(true, {})
        // Extracting XML element from store. 
        else callback(false, { 'input': result['merlin-response']['input'] } );
    });
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} input-names executing.`);
    return new Promise((resolve, reject) => {

        buildResponse((err, returnObj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {'request-type': params.requestType, 'response-type': 'error', 'error-type': 'permission'}, 
                    'Access is denied.'
                );
                // Sending FAILURE response.
                reject(responseObj);
            } else {
                // Building SUCCESS response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {'request-type': params.requestType, 'response-type': 'success'},
                    undefined,
                    returnObj
                );
                // Sending SUCCESS response.
                resolve(responseObj)
            }
        });
    });
};

module.exports = {
    handleRequest
};