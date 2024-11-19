import ConfigJson from '../../../../Config.json' with {type: 'json'};

const StartFunc = async () => {
    // let jVarLocalStichRef = inRowData.FK;
    let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "VoucherRef" });

    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/Show/Filter/VoucherRef/${jVarLocalStichRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
