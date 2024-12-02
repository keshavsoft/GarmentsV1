import optionsJson from './options.json' with {type: 'json'};
import ConfigJson from '../../Config.json' with {type: 'json'};
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    optionsJson.onClickRow = StartFuncOnClickRowFunc;
    optionsJson.responseHandler = responseHandler;
    optionsJson.queryParams = queryParams;
    let jVarLocalStichRef = JfStich();

    optionsJson.url = `/${ConfigJson.routePath}/${ConfigJson.tableName}/Show/Filter/FK/${jVarLocalStichRef}`;

    $table.bootstrapTable(optionsJson);
};

const JfStich = () => {
    let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "StichRef" });

    if (jVarLocalStichRef === "" || jVarLocalStichRef === null) { // Check if empty string or null
        return localStorage.getItem("StichRef");
    } else {
        return jVarLocalStichRef;
    }
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };

