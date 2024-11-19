import { StartFunc as DeliveryStiching } from "./DeliveryStiching/EntryFile.js";
import { StartFunc as MasterItems } from "./MasterItems/EntryFile.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as grouoBy } from "./grouoBy.js";

let StartFunc = async ({ inRowData }) => {
    let [LocalDeliveryStiching, jVarLocalMasterItems] = await Promise.all([
        DeliveryStiching({ inRowData }),
        MasterItems()]);

    let LocalMergeData = await mergeDataFunc({ inBillsStiching: LocalDeliveryStiching, inMasterItems: jVarLocalMasterItems });
    let LocalFooterGSTData = grouoBy(LocalMergeData);
    console.log("LocalFooterGSTData:",LocalFooterGSTData);
    
    // StartFuncAfterFetch({ inHeadData: jVarLocalStichingPosData, inBodyData: LocalMergeData, inFooterData: LocalFooterGSTData })
    StartFuncAfterFetch({ inFromFetch: LocalMergeData, inRowData,inFooterData: LocalFooterGSTData })

};

const mergeDataFunc = ({ inBillsStiching, inMasterItems }) => inBillsStiching.map(element => ({ ...element, GST: (inMasterItems.find(item => item.ItemName === element.ProductName)?.GST || "5") }));

export { StartFunc };