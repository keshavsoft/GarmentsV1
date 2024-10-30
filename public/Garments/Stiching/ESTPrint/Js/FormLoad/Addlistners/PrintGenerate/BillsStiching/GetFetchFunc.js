import { StartFunc as StartFuncAfterFetch } from "../AfterFetch/PrintBody.js";

const StartFunc = async () => {
    let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "StichRef" });

    let jVarLocalFetchUrl = `/binV4/BillsStiching/Show/Filter/FK/${jVarLocalStichRef}`;

    let response = await fetch(jVarLocalFetchUrl);
    if (response.status === 200) {
        let jVarLocalResponse = await response.json();
        StartFuncAfterFetch({ InData: jVarLocalResponse, inRowData: jVarLocalStichRef });
    } else {
        swal.fire({ icon: "error", title: "no data" })
    };

};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
