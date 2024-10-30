import ConfigJson from "../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "StichRef" });
    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/BillsStiching/Show/Filter/FK/${jVarLocalStichRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    return jVarLocalResponse;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };