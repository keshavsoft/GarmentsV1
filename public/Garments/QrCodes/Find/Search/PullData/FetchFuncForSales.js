import ConfigJson from '../../../../config.json' with {type: 'json'};

let FromNode = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });

        // let jVarLocalFetchUrl = `/bin/BillsQrCode/FilterData/pk/${jVarLocalRowPK}`;
        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/BillsQrCode/RowShow/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);

        if (response.status === 500) {
            LocalReturnObject.JsonData = [];
            LocalReturnObject.KTF = true;
            return await LocalReturnObject;
        };
        const data = await response.json();

        LocalReturnObject.JsonData = data;
        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { FromNode };