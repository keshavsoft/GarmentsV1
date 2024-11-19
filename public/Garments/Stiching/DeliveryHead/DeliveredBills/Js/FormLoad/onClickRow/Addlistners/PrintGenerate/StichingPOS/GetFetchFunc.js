const StartFunc = async () => {
    let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "StichRef" });
    let jVarLocalFetchUrl = `/binV4/StichingPOS/RowShow/${jVarLocalStichRef}`;
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
