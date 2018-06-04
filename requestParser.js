const requestHandler = require('./RequestHandlers/requestHandler.js');
const serverRequest = new require('./serverRequest').serverRequest;

const serverRequestHandler = new serverRequest();

const handleRequest = (params) => {
    var attributes = params.body['merlin-request']['$'];
    // Extracting request-type & client-req-id from the request.
    var requestType = attributes['request-type'];
    var clientReqId = attributes['client-req-id']; 

    // Verifying client-req-id in the request.
    if (clientReqId) {
        console.log(`${new Date().toISOString()} ${params.uuid} client-req-id ${clientReqId}`);
    } else {
        console.log(`${new Date().toISOString()} ${params.uuid} client-req-id null`)
    }

    // Verifying request-type in the request.
    console.log(`${new Date().toISOString()} ${params.uuid} request-type ${requestType}`)
    switch (requestType) {
        case 'input-names':
            return requestHandler.inputNames({
                ...params, 
                requestType, 
                clientReqId,
                inputName: attributes['input-name']
            });
            break;
        case 'input-values':
            return requestHandler.inputValues({...params, requestType, clientReqId});
            break;   
        case 'query-submit':
            return requestHandler.querySubmit({...params, requestType, clientReqId, serverRequestHandler});
            break;
        case 'query-status':
            return requestHandler.queryStatus({...params, requestType, clientReqId, serverRequestHandler, serverRequestId: attributes['server-request-id']});
            break;
        case 'query-cancel':
            return requestHandler.queryCancel({...params, requestType, clientReqId, serverRequestHandler, serverRequestId: attributes['server-request-id']});
            break;
        case 'get-results':
            return requestHandler.getResults({
                ...params, 
                requestType, 
                clientReqId, 
                serverRequestHandler, 
                serverRequestId: attributes['server-request-id'],
                startRow: attributes['start-row'],
                endRow: attributes['end-row']
            });
            break;
        case 'download-results':
            return requestHandler.downloadResults({
                ...params, 
                requestType, 
                clientReqId, 
                serverRequestHandler, 
                serverRequestId: attributes['server-request-id'],
            });
            break;
        case 'query-sql':
            return requestHandler.querySql({...params, requestType, clientReqId});
            break;
        case 'load-query':
            return requestHandler.loadQuery({...params, requestType, clientReqId, queryName: attributes['query-name'], userName: attributes['user-name']});
            break;
        case 'save-query':
            return requestHandler.saveQuery({...params, requestType, clientReqId, queryName: attributes['query-name'], overwrite: attributes['overwrite']});
            break;
        case 'rm-query':
            return requestHandler.rmQuery({...params, requestType, clientReqId, queryName: attributes['query-name']});
            break;
        case 'ls-query':
            return requestHandler.lsQuery({...params, requestType, clientReqId, userOnly: attributes['user-only'], serverRequestHandler});
            break;
        case 'create-script-list':
            return requestHandler.createScriptList({...params, requestType, clientReqId, scriptListName: attributes['script-list-name']});
            break;
        case 'rm-script-list':
            return requestHandler.rmScriptList({...params, requestType, clientReqId, scriptListName: attributes['script-list-name']});
            break;
        case 'load-script-list':
            return requestHandler.loadScriptList({...params, requestType, clientReqId, scriptListName: attributes['script-list-name']});
            break;
        case 'edit-script-list':
            return requestHandler.editScriptList({...params, requestType, clientReqId, scriptListName: attributes['script-list-name']});
            break;
        case 'ls-script-list':
            return requestHandler.lsScriptList({...params, requestType, clientReqId});
            break;
        case 'server-stats':
            return requestHandler.serverStatus({...params, requestType, clientReqId});
            break;
        default:
            return requestHandler.defaultHandler({...params, requestType, clientReqId});
    };
};

module.exports = {
    handleRequest
};