const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    let randomNumber1 = Math.ceil(new Date().getUTCSeconds()/2);
    //Fetching details from queryStore.
    let obj = params.serverRequestHandler.getResults('abcde', randomNumber1+0, randomNumber1+30, 8);

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
                    undefined,
                    {table: returnObj.table}
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