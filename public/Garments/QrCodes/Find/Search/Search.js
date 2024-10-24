import { StartFunc as ShowOnDomStartFunc } from "./ToDom/Start.js";
import { StartFunc as AddListenersStartFunc } from "./AddListenerFuncs/StartFuncs.js";

let jFStartFunc = () => {
    ShowOnDomStartFunc();

    AddListenersStartFunc();
};

jFStartFunc();