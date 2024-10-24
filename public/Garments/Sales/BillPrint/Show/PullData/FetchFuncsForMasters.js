import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    try {
        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/Items/Show/DataOnly`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        if (data) {
            LocalReturnObject.JsonData = data;
            let localStrogeData = JSON.stringify(data);
            window.localStorage.setItem("Masters", [localStrogeData]);
        };

        LocalReturnObject.KTF = true;
    } catch (error) {
        console.log("error:", error);
    };

    return await LocalReturnObject;
};

export { StartFunc };