import { StartFunc as StartFuncPrintHeader } from "./PrintHeader.js";
import { StartFunc as StartFuncPrintBody } from "./PrintBody.js";
import { startFunc as Footer } from "./Footer.js";

let StartFunc = async ({ inFromFetch, inRowData, inFooterData }) => {

    let jVarLocalFilterData = inFromFetch
    clearModalContent();
    StartFuncPrintHeader({ InData: inRowData });
    StartFuncPrintBody({ InData: jVarLocalFilterData, inAdvanceAmt: inRowData?.AdvanceAmt });
    Footer({ InData: inFooterData })
    $('#showModalId').modal('show');
};


const clearModalContent = () => {
    let k1 = document.getElementById("PrintDiv");
    k1.innerHTML = '';
};

export { StartFunc };
