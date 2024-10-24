import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as StartFuncButtonClickFuncs } from "./AddListenersFuncs/ButtonClickFuncs.js";

let jFStartFunc = async () => {
    await ShowOnDomStartFunc();

    StartFuncButtonClickFuncs();
};

jFStartFunc().then(() => {
});