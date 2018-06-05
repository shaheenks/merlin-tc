const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    // GENERATING MOCK DATA;
    let totalRecords = Math.ceil(new Date().getUTCSeconds())*2; // Randomizing the total number of records.
    // Calculating a valid startRow number.
    let startRow = parseInt(params.startRow);
    if (!startRow || startRow < 0) startRow = 0;
    // Calculating a valid endRow number.
    let endRow = parseInt(params.endRow);
    if (!endRow) endRow = startRow+100
    else if (endRow < 0) endRow = totalRecords;

    let stopFetch = endRow < totalRecords ? endRow : totalRecords;
    let obj = [];

    for (i=startRow; i < stopFetch; i++) {
        obj.push({'query-type': 'sample', 'query-name': `Query_${i}`, 'user-name': 'sampleUser', 'last-modified': `${new Date().toISOString()}`})
    }
    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    callback(false, {rowCount: totalRecords, items: obj});
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        // Outputs query parameters if any.
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} user-only ${params.userOnly}`);
        buildResponse(params, (err, obj) => {
            if (err) {
                // Buidling FAILURE response.
                var responseObj = new responseBuilder.ResponseObj(
                    'merlin-response', 
                    {
                        'request-type': params.requestType, 
                        'response-type': 'error', 
                        'error-type': 'permission'}, 
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
                        'row-count': obj.rowCount
                    }
                );
                obj.items.forEach(item => responseObj.addPlainElement('saved-query', item));
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