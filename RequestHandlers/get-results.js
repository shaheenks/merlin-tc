const responseBuilder = require('../responseBuilder');

// Your action goes here....
const buildResponse = (params, callback) => {
    // GENERATING MOCK DATA;
    // setting number of columns btw 6 & 10; based on time.
    let numberOfColumns = 6 + Math.ceil(new Date().getUTCMinutes()/15);
    // Randomizing the total number of records.
    let totalRecords = 25 + Math.ceil(new Date().getUTCSeconds()/4); 
    // Calculating a valid startRow number.
    let startRow = parseInt(params.startRow);
    if (!startRow || startRow < 0) startRow = 0;
    // Calculating a valid endRow number.
    let endRow = parseInt(params.endRow);
    if (!endRow) endRow = startRow+100
    else if (endRow < 0) endRow = totalRecords;

    let obj = params.queryStore.getResults(params.serverRequestId, startRow, endRow, numberOfColumns, totalRecords);

    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    if (typeof obj === 'object') callback(false, obj)
    else callback(true, {});
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} Processing Request.`)
    return new Promise((resolve, reject) => {
        // Outputs query parameters if any.
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} server-request-id ${params.serverRequestId}`);
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} start-row ${params.startRow}`);
        console.log(`${new Date().toISOString()} ${params.uuid} ${params.requestType} end-row ${params.endRow}`);
        buildResponse(params, (err, returnObj) => {
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
                        'response-type': 'result-table', 
                        'server-request-id': params.uuid,
                        'start-row': returnObj.startRow,
                        'end-row': returnObj.endRow,
                        'row-count': returnObj.rowCount
                    },
                    undefined,
                    {table: returnObj['table']}
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