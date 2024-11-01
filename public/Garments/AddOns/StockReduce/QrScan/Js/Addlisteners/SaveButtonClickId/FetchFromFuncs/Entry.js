import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalDataNeeded = await StartFuncFetchFuncs();

        if (jVarLocalDataNeeded.status === 200) {
            StartFuncAfterFetch();
        } else {
            swal.fire({ icon: "error", title: "Duplicate" });

        }
    };
};

export { StartFunc }