import { StartFunc as StichingPOS } from "./StichingPOS/EntryFile.js";
import { StartFunc as DeliveryStiching } from "./DeliveryStiching/EntryFile.js";
import { StartFunc as MasterItems } from "./MasterItems/EntryFile.js";
import { StartFunc as HeadDeliveryStiching } from "./HeadDeliveryStiching/EntryFile.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as grouoBy } from "./grouoBy.js";

let StartFunc = async () => {
    let [LocalStichingPOS, LocalHeadDeliveryStiching, LocalDeliveryStiching, jVarLocalMasterItems] = await Promise.all([
        StichingPOS(),
        HeadDeliveryStiching(),
        DeliveryStiching(),
        MasterItems()]);

    let LocalHeadData = jFHeadMerge({ inHeadDeliveryStiching: LocalHeadDeliveryStiching, inStichingPOS: LocalStichingPOS });
    let LocalMergeData = await mergeDataFunc({ inBillsStiching: LocalDeliveryStiching, inMasterItems: jVarLocalMasterItems });
    let LocalFooterGSTData = grouoBy(LocalMergeData);
    StartFuncAfterFetch({ inBody: LocalMergeData, inHeaData: LocalHeadData, inFooterData: LocalFooterGSTData })

};

const mergeDataFunc = ({ inBillsStiching, inMasterItems }) => inBillsStiching.map(element => ({ ...element, GST: (inMasterItems.find(item => item.ItemName === element.ProductName)?.GST || "5") }));
const jFHeadMerge1 = ({ inHeadDeliveryStiching, inStichingPOS }) => {
    return inHeadDeliveryStiching.map(element => {
        console.log("element:", element, inStichingPOS);

        if (element.pk == inStichingPOS.pk) {

        }

        element.CustomerName = inStichingPOS.CustomerName;
        element.CustomerNumber = inStichingPOS.CustomerNumber;
        element.DeliveryDate = new Date(inStichingPOS?.Date).toLocaleDateString('en-GB'); // dd/mm/yyyy format
        element.BookingDate = new Date(inStichingPOS?.DateTime).toLocaleDateString('en-GB'); // dd/mm/yyyy format
        element.Date = new Date(element?.DateTime).toLocaleDateString('en-GB'); // dd/mm/yyyy format
        return element;

    });


}
const jFHeadMerge = ({ inHeadDeliveryStiching, inStichingPOS }) => {
    return {
        ...inHeadDeliveryStiching,

        "CustomerName": inStichingPOS.CustomerName,
        "CustomerNumber": inStichingPOS.CustomerNumber,
        "DeliveryDate": new Date(inStichingPOS?.Date).toLocaleDateString('en-GB'),
        "BookingDate": new Date(inStichingPOS?.DateTime).toLocaleDateString('en-GB'),
        "Date": new Date(inHeadDeliveryStiching.DateTime).toLocaleDateString('en-GB')

    }


}
export { StartFunc };