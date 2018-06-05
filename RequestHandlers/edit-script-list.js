const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (obj=[], callback) => {
    // FOR Counting script list delta.
    // let returnObj = {add: 0, remove: 0};
    // if (obj.length > 0) {
    //     obj.forEach((script) => {
    //         if (script.$.action == 'add') returnObj.add++
    //         else if (script.$.action == 'remove') returnObj.remove++
    //         else callback(true, returnObj)
    //     });
    //     // when script-list delta count is > 1, SUCCESS is sent.
    //     callback(false, returnObj);
    // } else {
    //     // when script-list delta count is zero, FAILURE is raised on validation error.
    //     callback(true, returnObj);
    // };

    callback(false, obj);
    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        // Outputs query parameters if any.
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} script-list-name ${params.scriptListName}`);
        buildResponse(params.body['merlin-request']['script-list-delta'], (err, returnObj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': 'error', 
                        'error-type': 'validation'
                    }, 
                    'Input validation error.'
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
                        'response-type': 'success'
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