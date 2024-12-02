import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = () => {
    StartFuncAddListeners();
    StartFuncBuildBsTable();
};
export { StartFunc };
