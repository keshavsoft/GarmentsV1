let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/binV4/HeadDeliveryStiching/Create`;

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    return response;
};

export { StartFunc };