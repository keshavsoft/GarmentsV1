import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as Addlisteners } from "./Addlisteners/EntryFile.js";

const StartFunc = () => {
    StartFuncFormLoad();

    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        Addlisteners();
    };
};

StartFunc();