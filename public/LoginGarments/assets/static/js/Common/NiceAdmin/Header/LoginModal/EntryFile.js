import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

import { StartFunc as validate } from "./validate.js";

const StartFunc = ({ inSuccessFunc }) => {
    StartFuncAddListeners({ inSuccessFunc });

    return validate();
};

export { StartFunc };