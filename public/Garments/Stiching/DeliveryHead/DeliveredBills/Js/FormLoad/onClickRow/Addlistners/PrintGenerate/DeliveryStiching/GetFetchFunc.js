import ConfigJson from '../../../../../Config.json' with {type: 'json'};

const StartFunc = async ({ inRowData }) => {
    let jVarLocalStichRef = inRowData.FK;
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/Show/Filter/FK/${jVarLocalStichRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };
