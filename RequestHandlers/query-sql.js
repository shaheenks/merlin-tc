const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (callback) => {
    let obj = `SELECT * FROM TABLE_NAME
    WHERE COLUMN_NAME IN ('VALUE1', 'VALUE2')
    GROUP BY COLUMN
    ORDER BY COLUMN`;

    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    callback(false, obj);
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`);
    return new Promise((resolve, reject) => {

        buildResponse((err, returnObj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {'request-type': params.requestType, 'response-type': 'error', 'error-type': 'general'}, 
                    'Unable to retrieve SQL.'
                );
                // Sending FAILURE response.
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Error Response Sent.`)
                reject(responseObj);
            } else {
                // Building SUCCESS response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {'request-type': params.requestType, 'response-type': 'success'},
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