import Configjson from "../../Config.json" with {type: "json"};

let StartFunc = async ({ inSettlementData }) => {
    let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "StichRef" });
    let jVarLocalBodyData = inSettlementData;
    let jVarLocalFetchUrl = `/${Configjson.routePath}/StichingPOS/Alter/AsIs/${jVarLocalStichRef}`;
    let jVarLocalFetchHeaderObject = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
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
