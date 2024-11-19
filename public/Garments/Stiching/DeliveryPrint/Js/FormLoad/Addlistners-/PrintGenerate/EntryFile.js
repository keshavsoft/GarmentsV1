import { StartFunc as StichingPOS } from "./StichingPOS/EntryFile.js";
import { StartFunc as BillsStiching } from "./BillsStiching/EntryFile.js";
import { StartFunc as MasterItems } from "./MasterItems/EntryFile.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as grouoBy } from "./grouoBy.js";
let StartFunc = async () => {
    let [jVarLocalStichingPosData, jVarLocalBillsStichingData, jVarLocalMasterItems] = await Promise.all([
        StichingPOS(),
        BillsStiching(),
        MasterItems()]);
    let LocalMergeData = await mergeDataFunc({ inBillsStiching: jVarLocalBillsStichingData, inMasterItems: jVarLocalMasterItems });
    let LocalFooterGSTData = grouoBy(LocalMergeData)
    StartFuncAfterFetch({ inHeadData: jVarLocalStichingPosData, inBodyData: LocalMergeData, inFooterData: LocalFooterGSTData })

};

const mergeDataFunc = ({ inBillsStiching, inMasterItems }) => inBillsStiching.map(element => ({ ...element, GST: (inMasterItems.find(item => item.ItemName === element.ProductName)?.GST || "5") }));

export { StartFunc };