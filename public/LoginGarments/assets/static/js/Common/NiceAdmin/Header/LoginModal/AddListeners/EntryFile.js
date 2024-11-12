import { StartFunc as StartFuncLoginButtonId } from "./LoginButtonId/EntryFile.js";
import { StartFunc as SignOutId } from "./SignOutId/EntryFile.js";

let StartFunc = ({ inSuccessFunc }) => {
    StartFuncLoginButtonId({ inSuccessFunc });
    SignOutId();
};

export { StartFunc };