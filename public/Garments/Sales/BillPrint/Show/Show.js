import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as StartFuncButtonClickFuncs } from "./AddListenersFuncs/ButtonClickFuncs.js";

let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let jFStartFunc = async () => {
    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });

    StartFuncButtonClickFuncs();
};

jFStartFunc().then(() => {
});