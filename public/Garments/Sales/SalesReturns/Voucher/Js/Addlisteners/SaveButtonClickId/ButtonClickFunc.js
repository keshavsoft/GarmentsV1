import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncCheckVoucherRef } from "./CheckVoucherRef.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = await StartFuncCheckFunc();

    if (jVarLocalFromCheck) {
        let LocalCheck = await StartFuncCheckVoucherRef();

        if (LocalCheck) {
            StartFuncFetchFromFuncs().then();
        };
    };
};

export { StartFunc };
