import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inRowpk }) => {
    let jVarLocalFetchResponce = await StartFuncFetchFuncs({ inRowpk });
    await StartFuncAfterFetch({ inFetchResponce: jVarLocalFetchResponce });
};

export { StartFunc }