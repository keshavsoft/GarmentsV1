import ConfigJson from "../../../Config.json" with { type: "json"};

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let jVarLocalFetchUrl = `/${LocalroutePath}/StichingPOS/Filter/MaxRow`;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

