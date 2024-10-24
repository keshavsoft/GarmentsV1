import ConfigJson from '../../../../config.json' with {type: 'json'};

let FromNode = async ({ inRowPK }) => {
    const LocalRowPk = inRowPK;
    try {
        const jVarLocalStartUrl = ConfigJson.StartUrl;

        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        //let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/BillsQrCode/FilterData/BillPk/${LocalRowPk}`;
        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/BillsQrCode/Search/AsArray?Key=BillPk&Value=${LocalRowPk}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };