const responseBuilder = require('../responseBuilder');

// Your action goes here.... Async Opertion to collect server status. 
const buildResponse = (callback) => {
    // Mock Values
    let statsObj = [
        {key: 'Total Scripts Poplutated', value: '68%'},
        {key: 'Total Reports Populated', value: '75%'},
        {key: 'Total Lists Created', value: '50'},
        {key: 'Total Templates Created', value: '50'}
    ];
    // set first attribute true (for SUCCESS response), false (for FAILURE response). 
    // Second attribure is return object.
    callback(false, statsObj);
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        buildResponse((err, statsObj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': 'error', 
                        'error-type': 'server'
                    }, 
                    'Unable to fetch data'
                );
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Error Response Sent.`)
                // Sending FAILURE response.
                reject(responseObj);
            } else {
                // Buidling SUCCESS response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': params.requestType
                    }
                );
                // Pushing data into Response Obj
                statsObj.forEach(stat => responseObj.addPlainElement('server-stat', stat));
                // Sending SUCCESS response.
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Success Response Sent.`)
                resolve(responseObj);
            }
        });
    });

};

module.exports = {
    handleRequest
};