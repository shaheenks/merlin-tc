const requestHandler = require('./RequestHandlers/requestHandler.js');
const serverRequest = new require('./serverRequest').serverRequest;

// For Query Data Storage.
const queryStore = new serverRequest();

const handleRequest = (params) => {
    var reqAttributes = params.body['merlin-request']['$'];
    // Extracting request-type & client-req-id from the request.
    var requestType = reqAttributes['request-type']; 

    // Verifying request-type in the request.
    console.log(`${new Date().toISOString()} ${params.uuid} ${requestType} Incoming Request.`)
    switch (requestType) {
        case 'input-names':
            return requestHandler.inputNames({
                ...params, // body, uuid, ts.
                requestType, 
                inputName: reqAttributes['input-name']
            });
            break;
        case 'input-values':
            return requestHandler.inputValues({
                ...params,
                requestType,
                inputName: reqAttributes['input-name'],
                nodeName: reqAttributes['node-name']
            });
            break;   
        case 'query-submit':
            return requestHandler.querySubmit({
                ...params, 
                requestType,
                queryStore 
            });
            break;
        case 'query-status':
            return requestHandler.queryStatus({
                ...params, 
                requestType,  
                queryStore, 
                serverRequestId: reqAttributes['server-request-id']
            });
            break;
        case 'query-cancel':
            return requestHandler.queryCancel({
                ...params, 
                requestType, 
                queryStore, 
                serverRequestId: reqAttributes['server-request-id']
            });
            break;
        case 'get-results':
            return requestHandler.getResults({
                ...params, 
                requestType,  
                queryStore, 
                serverRequestId: reqAttributes['server-request-id'],
                startRow: reqAttributes['start-row'],
                endRow: reqAttributes['end-row']
            });
            break;
        case 'download-results':
            return requestHandler.downloadResults({
                ...params, 
                requestType, 
                queryStore,
                serverRequestId: reqAttributes['server-request-id'],
                host: process.env.HEROKU_URL || require('os').hostname()+':' + '3000'
            });
            break;
        case 'query-sql':
            return requestHandler.querySql({
                ...params, 
                requestType
            });
            break;
        case 'load-query':
            return requestHandler.loadQuery({
                ...params, 
                requestType,
                queryName: reqAttributes['query-name'], 
                userName: reqAttributes['user-name']
            });
            break;
        case 'save-query':
            return requestHandler.saveQuery({
                ...params, 
                requestType, 
                queryName: reqAttributes['query-name'], 
                overwrite: reqAttributes['overwrite']
            });
            break;
        case 'rm-query':
            return requestHandler.rmQuery({
                ...params, 
                requestType,  
                queryName: reqAttributes['query-name']
            });
            break;
        case 'ls-query':
            return requestHandler.lsQuery({
                ...params, 
                requestType, 
                userOnly: reqAttributes['user-only'], 
                queryStore,
                startRow: reqAttributes['start-row'],
                endRow: reqAttributes['end-row']
            });
            break;
        case 'create-script-list':
            return requestHandler.createScriptList({
                ...params, 
                requestType,  
                scriptListName: reqAttributes['script-list-name']
            });
            break;
        case 'rm-script-list':
            return requestHandler.rmScriptList({
                ...params, 
                requestType, 
                scriptListName: reqAttributes['script-list-name']
            });
            break;
        case 'load-script-list':
            return requestHandler.loadScriptList({
                ...params, 
                requestType, 
                scriptListName: reqAttributes['script-list-name']
            });
            break;
        case 'edit-script-list':
            return requestHandler.editScriptList({
                ...params, 
                requestType,
                scriptListName: reqAttributes['script-list-name']
            });
            break;
        case 'ls-script-list':
            return requestHandler.lsScriptList({
                ...params, 
                requestType
            });
            break;
        case 'server-stats':
            return requestHandler.serverStatus({
                ...params, 
                requestType
            });
            break;
        default:
            return requestHandler.defaultHandler({
                ...params, 
                requestType
            });
    };
};

const downloadRequest = (params) => {
    return requestHandler.downloadRequest({
        ...params,
        queryStore
    });
};

module.exports = {
    handleRequest,
    downloadRequest
};