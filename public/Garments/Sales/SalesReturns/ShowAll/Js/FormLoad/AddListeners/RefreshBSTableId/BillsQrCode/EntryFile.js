import { StartFunc as StartFuncFetchFunc } from "./GetFetchFunc.js";

let StartFunc = async () => {
    let response = await StartFuncFetchFunc();

    return await response;
};

export { StartFunc };