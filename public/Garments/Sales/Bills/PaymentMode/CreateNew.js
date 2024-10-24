import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
import { StartFunc as FormLoadFuncsStartFunc } from "./FormLoadFuncs.js";

let StartFunc = async () => {
    AddListenersStartFunc();

    await FormLoadFuncsStartFunc();
};

StartFunc().then();