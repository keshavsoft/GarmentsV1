import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async ({ inRowpk }) => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = "BillsQrCode";
    let LocalRowpk = inRowpk;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/RowShow/${LocalRowpk}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

