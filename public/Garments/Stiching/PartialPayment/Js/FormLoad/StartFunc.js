import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/StartFunc.js";
import { StartFunc as StartFuncShowOnDom } from "../ShowOnDom/StartFunc.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncShowOnDom();
};


export { StartFunc };
