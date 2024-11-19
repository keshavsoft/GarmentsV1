import { StartFunc as StartFuncPrintHeader } from "./PrintHeader.js";
import { StartFunc as StartFuncPrintBody } from "./PrintBody.js";
import { startFunc as Footer } from "./Footer.js";

let StartFunc = async ({ inBody, inHeaData, inFooterData }) => {
    console.log("inHeaData:",inHeaData);
    
    clearModalContent();
    StartFuncPrintHeader({ InData: inHeaData });
    StartFuncPrintBody({ InData: inBody, inAdvanceAmt: inHeaData?.AdvanceAmt });
    Footer({ InData: inFooterData })
};


const clearModalContent = () => {
    let k1 = document.getElementById("PrintDiv");
    k1.innerHTML = '';
};

export { StartFunc };
