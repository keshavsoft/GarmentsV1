import { StartFunc as clickFunc } from "./clickFunc.js";

let StartFunc = () => {
    let jVarLocalLoginButtonId = "SignOutId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalLoginButtonId);
    console.log("jVarLocalHtmlId : ", jVarLocalHtmlId);

    jVarLocalHtmlId.addEventListener("click", clickFunc);
};

export { StartFunc }