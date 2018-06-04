const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    
    // Submit query for processing.
    params.serverRequestHandler.submitQuery({query: params.body['merlin-request']['query'][0]}, params.uuid);
    let obj = params.serverRequestHandler.getOneQuery(params.uuid);

    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    callback(false, obj);
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} query-submit executing.`);
    return new Promise((resolve, reject) => {

        buildResponse(params, (err, returnObj) => {
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
                    {'request-type': params.requestType, 'response-type': 'status', 'status': returnObj.status, 'server-request-id': returnObj.uuid}
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