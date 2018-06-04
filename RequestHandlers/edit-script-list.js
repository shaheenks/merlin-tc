const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (obj=[], callback) => {
    let returnObj = {add: 0, remove: 0};
    if (obj.length > 0) {
        obj.forEach((script) => {
            if (script.$.action == 'add') returnObj.add++
            else if (script.$.action == 'remove') returnObj.remove++
            else callback(true, returnObj)
        });
        // when script-list delta count is > 1, SUCCESS is sent.
        callback(false, returnObj);
    } else {
        // when script-list delta count is zero, FAILURE is raised on validation error.
        callback(true, returnObj);
    };

    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} edit-script-list executing.`);
    return new Promise((resolve, reject) => {
        //Print script-list-name if found.
        console.log(`${new Date().toISOString()} ${params.uuid} script-list-name `+ JSON.stringify(params.scriptListName));

        buildResponse(params.body['merlin-request']['script-list-delta'], (err, returnObj) => {
            console.log(`${new Date().toISOString()} ${params.uuid} script-list-delta `+ JSON.stringify(returnObj));
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {'request-type': params.requestType, 'response-type': 'error', 'error-type': 'validation'}, 
                    'Input validation error.'
                );
                // Sending FAILURE response.
                reject(responseObj);
            } else {
                // Building SUCCESS response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {'request-type': params.requestType, 'response-type': 'success'}
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