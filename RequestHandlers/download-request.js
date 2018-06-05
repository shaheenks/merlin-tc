// Your action goes here....
const buildResponse = (params, callback) => {
    let obj = '';
    let tmp = [];
    // Randomizing number of rows & columns.
    let rows = Math.ceil(new Date().getUTCSeconds()/2);
    let columns = 6 + Math.ceil(new Date().getUTCSeconds()/15);
    // Generating Mock Data.
    for(i=0; i<rows; i++){
        let tmp = [];
        if (i==0) {
            // Generate Column Headers.
            for(j=0; j<columns; j++){
                tmp.push(`Column_${j}`);
            };
        } else {
            for(j=0; j<columns; j++){
                tmp.push(`Row_${i}_Column_${j}`);
            };
        }
        obj = obj + tmp.join(',') + '\n'
    }

    // set first attribute true (for SUCCESS response), false (for FAILURE response). Second attribure is return object.
    callback(false, obj);
};

const handleRequest = (params) => {
    console.log(`${new Date().toISOString()} download-request. ${params.uuid}`)
    return new Promise((resolve, reject) => {

        buildResponse(params, (err, obj) => {
            if (err) {
                // Buidling FAILURE response.
                // Sending FAILURE response.
                reject(err);
            } else {
                // Building SUCCESS response.
                // Sending SUCCESS response.
                resolve(obj)
            }
        });
    });
};

module.exports = {
    handleRequest
};