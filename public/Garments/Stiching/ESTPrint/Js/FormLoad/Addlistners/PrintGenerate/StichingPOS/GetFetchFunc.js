import { StartFunc as StartFuncAfterFetch } from "../AfterFetch/PrintHeader.js";

const StartFunc = async () => {
    let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "StichRef" });
    let jVarLocalFetchUrl = `/binV4/StichingPOS/RowShow/${jVarLocalStichRef}`;
    let response = await fetch(jVarLocalFetchUrl);

    if (response.status === 200) {
        let jVarLocalResponse = await response.json();
        localStorage.setItem("StichingPOS", JSON.stringify(jVarLocalResponse));

        StartFuncAfterFetch({ InData: jVarLocalResponse });
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
