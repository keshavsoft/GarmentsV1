import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    event.preventDefault();
    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs().then();
    };
}

export { StartFunc };
