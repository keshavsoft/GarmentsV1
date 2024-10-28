import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {

   let jVarLocalFromAdmin = true;

   if (jVarLocalFromAdmin) {
      StartFuncAddListeners();
   };
};

StartFunc();