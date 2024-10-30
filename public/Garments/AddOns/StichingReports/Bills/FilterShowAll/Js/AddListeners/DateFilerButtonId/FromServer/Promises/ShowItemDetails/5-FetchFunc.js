let StartFunc = async () => {

    let jVarLocalFetchUrl = `/binV4/DeliveryStiching/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let Text = await response.json();

    return Text;
};

export { StartFunc };