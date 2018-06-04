const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    //Fetching details from queryStore.
    let obj = params.serverRequestHandler.submitQuery({sample:['sample']}, params.serverRequestId);

    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    callback(false, obj);
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} rm-query executing.`);
    return new Promise((resolve, reject) => {

        buildResponse(params, (err, obj) => {
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
                    `http://localhost:3010/download/${params.uuid}`
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