import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPos } from "./Promises/ShowPos/PostFetch.js";
import { StartFunc as HeadDeliveryStiching } from "./Promises/HeadDeliveryStiching/PostFetch.js";

let StartFunc = async ({ inFromDate, inToDate }) => {
    const [HeadDeliveryStichingData, DeliveryStiching, StichingPOS] = await Promise.all(
        [HeadDeliveryStiching(), StartFuncItemDetails(), StartFuncShowPos()]);

    let jVarLocalDeliveryStichingItem = DeliveryStiching;
    let jVarLocalStichingPOS = StichingPOS;
    let jVarLocalHeadDeliveryStichingData = HeadDeliveryStichingData;

    let jVarLocalWithBillData = jFLocalMerge({
        inPOSData: jVarLocalStichingPOS,
        inDeleryData: jVarLocalDeliveryStichingItem,
        inHeadDeliveryStichingData: jVarLocalHeadDeliveryStichingData
    });

    // jVarLocalWithBillData = jVarLocalWithBillData.filter(element => element === undefined === false).filter(element => {
    //     return Date.parse(element.Date) <= Date.parse(inFromDate) && Date.parse(element.Date) >= Date.parse(inToDate)
    // });

    jFLocalHideSpinner();

    return jVarLocalWithBillData;
};

const jFLocalMerge = ({ inPOSData, inDeleryData, inHeadDeliveryStichingData }) => {

    let jVarLocalPOSData = inPOSData;
    let jVarLocalDeleryData = inDeleryData;
    let jVarLocalHeadDeliveryStichingData = inHeadDeliveryStichingData;
    let jVarLocalReturnArray;

    jVarLocalReturnArray = jVarLocalHeadDeliveryStichingData.map(element => {

        let LocalStichingPOSFindData = jVarLocalPOSData.find(e => e.pk == element.FK);
        let LocalFilterData = jVarLocalDeleryData.filter(e => e.FK == element.FK && e.deliveryItemDescription == element.deliveryItemDescription);
        let LocalGAmount = LocalFilterData.map(el => el.GAmount).reduce((a, b) => a + parseInt(b), 0);
        let LocaldeliveryItemDisAmount = LocalFilterData
            .map(el => el.deliveryItemDisAmount)
            .filter(el => !isNaN(parseInt(el)))  // Filter out NaN values
            .reduce((a, b) => a + parseInt(b), 0);
        let LocalTotalAmount = (parseInt(LocalGAmount) - parseInt(LocaldeliveryItemDisAmount));
        return {
            pk: element?.pk,
            ESTBill: element?.FK,
            Date: element?.DateTime,
            PaymentMode: element?.PaymentMode,
            CustomerName: LocalStichingPOSFindData?.CustomerName,
            CustomerNumber: LocalStichingPOSFindData?.CustomerNumber,
            GAmount: LocalGAmount,
            deliveryItemDisAmount: LocaldeliveryItemDisAmount,
            TotalAmount: LocalTotalAmount
        };

    });

    return jVarLocalReturnArray
}
let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }