const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    let obj = {node : []};
    let randomNumber1 = Math.ceil(new Date().getUTCSeconds()/30);
    let randomNumber2 = Math.ceil(new Date().getUTCMinutes()/30);
    //Randomizing response.
    for (let i=0; i<randomNumber2; i++) {
        let tmp = {$:{}};
        if (params.inputName == 'composite_nodes') obj.node.$['too-many'] = true;
        if (randomNumber1 == 1) {
            tmp.$['node-name'] = `Node${randomNumber1}`
            tmp.$['display-name'] = `Node${randomNumber1}_disp`
            tmp.$['has_children'] = "true"
        } else {
            tmp.$['node-name'] = `Node${randomNumber1}`
        }
        obj.node.push(tmp)
    }
    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    callback(false, obj);
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} input-names executing.`);
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
                    {'request-type': params.requestType, 'response-type': 'success'},
                    undefined,
                    {node: returnObj.node}
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