const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    let obj = {node : []};
    let randomNumber1 = Math.ceil(new Date().getUTCSeconds()/30);
    let randomNumber2 = (Math.ceil(new Date().getUTCSeconds()%2)+1);
    //Randomizing response.
    for (let i=0; i<randomNumber2; i++) {
        let tmp = {$:{}};
        if (params.inputName != 'composite_nodes') {
            if (randomNumber1 == 1) {
                tmp.$['node-name'] = `Node${i}`
                tmp.$['display-name'] = `Node${i}_disp`
                tmp.$['has_children'] = "true"
            } else {
                tmp.$['node-name'] = `Node${i}`
            }
            obj.node.push(tmp)
        }
    }
    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    callback(false, obj);
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        // Outputs query parameters if any.
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} input-name ${params.inputName}`);
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} node-name ${params.nodeName}`);
        buildResponse(params, (err, returnObj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': 'error', 
                        'error-type': 'general'
                    }, 
                    'Server unavailable'
                );
                console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Error Response Sent.`)
                // Sending FAILURE response.
                reject(responseObj);
            } else {
                // Building SUCCESS response.
                let responseAttributes = {
                    'request-type': params.requestType, 
                    'response-type': params.requestType
                };
                if (params.inputName == 'composite_nodes') responseAttributes['too-many'] = true;
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    responseAttributes,
                    undefined,
                    {node: returnObj.node}
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