const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (callback) => {
    // GENERATING MOCK DATA.
    let listObj = [];
    // Calculating a random number between 0 - 20
    var randomNumber = Math.ceil(new Date().getSeconds()/3);
    // Ensuring atlease one record.
    if (randomNumber == 0) randomNumber ++;
    // Calculating records.
    for (i=1; i<= randomNumber; i++) {
        listObj.push({'script-name': 'Report'+i});
    };
    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    callback(false, listObj);
};


const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        // Outputs query parameters if any.
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} script-list-name ${params.scriptListName}`);
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
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Error response sent.`)
                // Sending FAILURE response.
                reject(responseObj);
            } else {
                // Building SUCCESS response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': params.requestType
                    }
                );
                // Buidling random script list.
                listObj.forEach(item => responseObj.addPlainElement('script', item));
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Success resoponse sent.`)
                // Sending SUCCESS response.
                resolve(responseObj)
            }
        });
    });
};

module.exports = {
    handleRequest
};