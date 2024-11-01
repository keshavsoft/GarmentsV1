import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    try {
        let jVarLocalStartUrl = ConfigJson.StartUrl;
        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/pos/Show/DataOnly`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };