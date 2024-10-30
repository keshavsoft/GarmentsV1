import { StartFunc as StartFuncShowOnDom } from './ShowOnDom.js';

let StartFunc = async ({ inFetchData, inDeliveryHeadData }) => {
    let jVarLocalData = await inFetchData.json();
    StartFuncShowOnDom({ inData: jVarLocalData, inDeliveryHeadData })
};

export { StartFunc }