import { StartFunc as PrintHeader } from "./PrintHeader.js";
import { StartFunc as PrintBody } from "./PrintBody.js";
import { startFunc as Footer } from "./Footer.js";

let StartFunc = async ({ inHeadData, inBodyData, inFooterData }) => {
    await PrintHeader({ InData: inHeadData })
    PrintBody({ InData: inBodyData });
    Footer({ InData: inFooterData });

};

export { StartFunc };