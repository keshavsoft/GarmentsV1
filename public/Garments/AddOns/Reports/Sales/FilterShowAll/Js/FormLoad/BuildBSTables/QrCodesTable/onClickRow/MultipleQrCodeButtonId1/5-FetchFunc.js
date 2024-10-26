let StartFunc = async ({ inRowPk }) => {
    let jVarLocalinRowPk = inRowPk;
    let jVarLocalFetchUrl = `/binV4/QrCodes/Generate/FilterData/OrderNumber/${jVarLocalinRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return await jVarLocalResponse;
};

export { StartFunc };
