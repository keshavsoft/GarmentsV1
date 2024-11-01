import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = await StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/Custom/Clients/Maguva/Transactions/Sales/QrCodes`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    // let data = await response.json();

    return await response;
};

export { StartFunc };

