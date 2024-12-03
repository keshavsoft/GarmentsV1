import ConfigJson from "../../../../../Config.json" with{type: "json"};

let StartFunc = async ({ inRowData }) => {
    let jVarLocalvoucherRef = inRowData.pk;

    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/BillsStiching/Delete/ByPk/${jVarLocalvoucherRef}`;
    let LocalBody = {
        "method": "delete",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    let response = await fetch(jVarLocalFetchUrl,LocalBody);
    return await response;
};

export { StartFunc };