import ApiConfigJson from "../../../../Config.json" with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalroutePath = ApiConfigJson.routePath;

    let jVarLocalFetchUrl = `/${jVarLocalroutePath}/BillsQrCode/Show/DataOnly`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };