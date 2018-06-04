const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    // setting number of columns btw 6 & 10; based on time.
    let numberOfColumns = 6 + Math.ceil(new Date().getUTCMinutes()/15);
    let endRow = params.endRow;
    let startRow = params.startRow;
    // if startRow is invalid or less than zero.
    if (!startRow || startRow < 0) startRow = 0;
    // endRow is invalid or less than zero. Max value is set.
    if (!endRow || endRow < 0) endRow = startRow + 100;
    // endRow is less than zero. all row to be returned.
    let obj = params.serverRequestHandler.getResults(params.serverRequestId, startRow, endRow, numberOfColumns);

    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    if (typeof obj === 'object') callback(false, obj)
    else callback(true, {});
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} get-results executing.`);
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
                    {
                        'request-type': params.requestType, 
                        'response-type': 'result-table', 
                        'server-request-id': params.uuid,
                        'start-row': returnObj.startRow,
                        'end-row': returnObj.endRow,
                        'row-count': returnObj.rowCount
                    },
                    undefined,
                    {table: returnObj['table']}
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