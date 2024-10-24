import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncShowStatus } from "./ShowStatus.js";
// import { StartFunc as StartFuncShowOtherQrCodes } from "./ShowOtherQrCodes.js";

let StartFunc = () => {
    StartFuncShowOnDom().then();

    StartFuncShowStatus().then();
};

export { StartFunc };