import { StartFunc as StartFuncPrintHeader } from "./PrintHeader.js";
import { StartFunc as StartFuncPrintBody } from "./PrintBody.js";

let StartFunc = async ({ inFromFetch, inRowData }) => {
    let k1 = document.getElementById("PrintDiv");
    k1.innerHTML = "";
    StartFuncPrintHeader({ InData: inRowData });
    StartFuncPrintBody({ InData: inFromFetch });
    $('#showModalId').modal('show');
};

export { StartFunc };
