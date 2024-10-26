import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with { type: "json" };
import GlobalConfigJson from '../../../../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    let LocalroutePath = GlobalConfigJson.StartUrl;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchHeaders = await StartFuncFetchHeaders();
    // let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/WithKeysCheck`;
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/Create`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

