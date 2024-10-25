let StartFunc = async () => {

    let jVarLocalFetchUrl = `/binV4/BillsQrCode/Show/DataOnly`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };