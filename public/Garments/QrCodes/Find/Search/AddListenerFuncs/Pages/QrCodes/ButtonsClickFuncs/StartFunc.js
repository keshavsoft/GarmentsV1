import { StartFunc as StartFuncShowQrCodes } from "./ShowQrCodes.js";
import { StartFunc as StartFuncToModal } from "./ToModal.js";

let StartFunc = () => {
    StartFuncToModal();
    StartFuncShowQrCodes();
};

export { StartFunc };