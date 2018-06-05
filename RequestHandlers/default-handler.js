const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (callback) => {
    let obj = {};

    // set first attribute true (for success response), false (for failure response). Second attribure is return object.
    callback(true, obj);
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        buildResponse((err, obj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {'request-type': params.requestType, 
                    'response-type': 'error', 'error-type': 'general'}, 
                    'API function request not found.'
                );
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Error Response Sent.`)
                // Sending FAILURE response.
                reject(responseObj);
            } else {
                // Building SUCCESS response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {'request-type': params.requestType, 'response-type': 'success'}
                );
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Success Response Sent.`)
                // Sending SUCCESS response.
                resolve(responseObj);
            }
        })
    });
};

module.exports = {
    handleRequest
};