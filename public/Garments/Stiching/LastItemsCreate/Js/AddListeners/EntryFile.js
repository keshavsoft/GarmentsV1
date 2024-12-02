import { StartFunc as AdvancePayment } from "./AdvancePayment.js";
import { StartFunc as TableFooterSave } from "./TableFooterSave/EntryFile.js";

const StartFunc = () => {
    AdvancePayment();
    TableFooterSave();
};
export { StartFunc };