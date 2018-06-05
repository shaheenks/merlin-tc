const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (callback) => {
    let listObj = [];
    // Calculating a random number between 0 - 20
    var randomNumber = Math.ceil(new Date().getSeconds());
    // Ensuring atleast one record.
    if (randomNumber == 0) randomNumber ++;
    // Calculating records.
    for (i=1; i<= randomNumber; i++) {
        listObj.push({'script-list-name': 'list'+i});
    };
    // set first attribute true (for SUCCESS response), false (for FAILURE response). 
    // Second attribure is return object.
    callback(false, listObj);
};


const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`);
    return new Promise((resolve, reject) => {

        buildResponse((err, listObj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': 'error', 
                        'error-type': 'permission'
                    }, 
                    'Access is denied.'
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
                        'response-type': params.requestType, 
                        'user-name': require('uuid/v1')().substring(0,7), 
                        'last-modified': `${new Date().toISOString()}`, 
                        'script-count': listObj.length
                    }
                );
                // Buidling random script list.
                listObj.forEach(item => responseObj.addPlainElement('script-list', item));
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