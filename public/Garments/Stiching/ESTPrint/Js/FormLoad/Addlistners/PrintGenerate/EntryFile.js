import { StartFunc as StichingPOS } from "./StichingPOS/EntryFile.js";
import { StartFunc as BillsStiching } from "./BillsStiching/EntryFile.js";

let StartFunc = async () => {
    StichingPOS();
    BillsStiching();
};

export { StartFunc };