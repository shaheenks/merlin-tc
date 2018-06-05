const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    let query = params.body['merlin-request']['query'] ? params.body['merlin-request']['query'][0] : ['sample']
    // Submit query for processing.
    let status = params.queryStore.submitQuery({query: query}, params.uuid);
    let obj = params.queryStore.getOneQuery(params.uuid);

    // set first attribute true (for SUCCESS response), false (for FAILURE response). 
    // Second attribure is return object.
    if (obj) {
        callback(false, obj);
    } else {
        callback(true, {});
    }
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        // Outputs query parameters if any.
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} server-request-id ${params.serverRequestId}`);
        buildResponse(params, (err, returnObj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': 'error', 
                        'error-type': 'validation'}, 
                    'server-request-id not found.'
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
                        'response-type': 'status', 
                        'status': returnObj.status, 
                        'server-request-id': returnObj.uuid
                    }
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