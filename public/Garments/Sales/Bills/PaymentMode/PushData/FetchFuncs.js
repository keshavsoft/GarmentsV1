import { StartFunc as PreparePostDataStartFunc } from "../PreparePostData.js";
import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });

    try {
        let inFetchPostData = PreparePostDataStartFunc();

        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/pos/Alter/${jVarLocalRowPK}`;

        let jVarLocalFetchHeaders = {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response;

        return await data;
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


export { StartFunc };