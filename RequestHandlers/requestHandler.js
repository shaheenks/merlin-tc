const inputNames = require('./input-names');
const inputValues = require('./input-values');
const querySubmit = require('./query-submit');
const queryStatus = require('./query-status');
const queryCancel = require('./query-cancel');
const getResults = require('./get-results');
const downloadResults = require('./download-results');

const querySql = require('./query-sql');
const rmQuery = require('./rm-query');
const lsQuery = require('./ls-query');
const loadQuery = require('./load-query');
const saveQuery = require('./save-query');

const createScriptList = require('./create-script-list');
const rmScriptList = require('./rm-script-list');
const loadScriptList = require('./load-script-list');
const editScriptList = require('./edit-script-list');
const lsScriptList = require('./ls-script-list');

const serverStatus = require('./server-status');

const downloadRequest = require('./download-request');

const defaultHandler = require('./default-handler');

module.exports = {
    inputNames: inputNames.handleRequest,
    inputValues: inputValues.handleRequest,
    querySubmit: querySubmit.handleRequest,
    queryStatus: queryStatus.handleRequest,
    queryCancel: queryCancel.handleRequest,
    getResults: getResults.handleRequest,
    downloadResults: downloadResults.handleRequest,
    querySql: querySql.handleRequest,
    rmQuery: rmQuery.handleRequest,
    lsQuery: lsQuery.handleRequest,
    loadQuery: loadQuery.handleRequest,
    saveQuery: saveQuery.handleRequest,
    createScriptList: createScriptList.handleRequest,
    rmScriptList: rmScriptList.handleRequest,
    loadScriptList: loadScriptList.handleRequest,
    editScriptList: editScriptList.handleRequest,
    lsScriptList: lsScriptList.handleRequest,
    serverStatus: serverStatus.handleRequest,
    downloadRequest: downloadRequest.handleRequest,
    defaultHandler: defaultHandler.handleRequest
};