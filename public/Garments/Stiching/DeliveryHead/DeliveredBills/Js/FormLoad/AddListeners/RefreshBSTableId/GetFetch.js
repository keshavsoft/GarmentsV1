let StartFunc = async () => {
    let jVarLocalHeadDelivery = await HeadDeliveryFetchFunc();
    let jVarLocalStitchingPOS = await StitchingPOSFetchFunc();
    let jVarLocalData = jVarLocalHeadDelivery.map(element => {
        jVarLocalStitchingPOS.filter(e => {
            if (element.FK == e.pk) {
                element.CustomerName = e.CustomerName;
                element.CustomerNumber = e.CustomerNumber;
                element.Date = e.Date;

            }
        });
        return element;
    });
    return jVarLocalData;
};

let HeadDeliveryFetchFunc = async () => {
    let jVarLocalFetchUrl = `/binV4/HeadDeliveryStiching/Show/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromResponse = await response.json();
    return jVarLocalFromResponse;
};

let StitchingPOSFetchFunc = async () => {
    let jVarLocalFetchUrl = `/binV4/StichingPOS/Show/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromResponse = await response.json();
    return jVarLocalFromResponse;
};
export { StartFunc };
