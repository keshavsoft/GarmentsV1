import { StartFunc as StartFuncCheckCookie } from "./CheckCookie.js";
import { StartFunc as StartFuncSetFocus } from "./SetFocus.js";

const StartFunc = () => {
    let localCheckCookie = StartFuncCheckCookie();

    if (localCheckCookie === true) {
        return true;
    } else {
        StartFuncSetFocus();
    };

    return false;
};

export { StartFunc };