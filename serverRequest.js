const xml2js = require('xml2js');

var builder = new xml2js.Builder();

class serverRequest {
    constructor() {
        this.queryStore = {}
    }
    submitQuery(query, uuid) {
        this.queryStore[uuid] = {};
        this.queryStore[uuid].query = builder.buildObject(query)
        this.queryStore[uuid].uuid = uuid
        this.queryStore[uuid].status = 'instantiated';
        this.queryStore[uuid].results = [];

        this.startJob(uuid)
    }
    checkStatus(uuid) {
        return this.queryStore[uuid].status;
    }
    cancelQuery(uuid) {
        if (this.queryStore[uuid].status == 'running' && this.queryStore[uuid]) this.queryStore[uuid].status = 'cancelled'
    }
    getResults(uuid, startRow, endRow, columns) {
        let returnObj = {
            rowCount: endRow-startRow,
            endRow: endRow,
            startRow: startRow,
            table: [
                {
                    tr : [
                        {
                            th: []
                        }
                    ]
                }
            ]
        };
        // Building column headings.
        for (let i=0; i<columns; i++) {
            returnObj.table[0].tr[0].th.push(`Column_${i+1}`);
        };
        // Filling Column data.
        for (let i=1; i<=returnObj.rowCount; i++) {
            let columnsList = [];
            for(let j=0; j<columns; j++) {
                columnsList.push(`Row_${i}_Column_${j}`);
            }
            returnObj.table[0].tr[i] = {
                td: columnsList
            };
        }
        return returnObj;
    }
    getAllQueries() {
        var results = Object.keys(this.queryStore).map((key) => this.getOneQuery(key));
        return results;
    }
    getOneQuery(uuid) {
        return this.queryStore[uuid];
    }
    startJob(uuid) {
        // Handle to start processing.
        setTimeout(() => {
            this.queryStore[uuid].status = 'running';
            setTimeout(() => {
                if (this.queryStore[uuid].status == 'running') this.queryStore[uuid].status = 'completedNormally';
            }, 20000);
        }, 5000);
    }
}

module.exports = {
    serverRequest
};