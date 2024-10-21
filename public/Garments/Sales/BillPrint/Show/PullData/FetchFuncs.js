import ConfigJson from '../../../../config.json' with {type: 'json'};

let FromNode = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    let LocalRowPk = ReturnRowPK();
    try {
        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/pos/RowShow/${LocalRowPk}`;
        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        return await data;

    } catch (error) {
        console.log("error:", error);
    }

};

let ReturnRowPK = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const RowPK = params.get("RowPK");

    return RowPK;
};

export { FromNode };