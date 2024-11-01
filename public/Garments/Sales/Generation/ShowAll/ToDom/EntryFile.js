import { StartFunc as BillsQrCode } from "../PullData/FetchFuncs.js";
import { StartFunc as POS } from "../PullData/POSFetchFuncs.js";
import { StartFunc as ShowInBody } from "./ShowInBody.js";

let StartFunc = async () => {
    let jVarLocalBillsQrCodeData = await BillsQrCode();
    let jVarLocalPOSData = await POS();
    let jVarLocalData = await LocalDataMergeFunc({ inBillsQrCodeData: jVarLocalBillsQrCodeData, inPosData: jVarLocalPOSData });
   console.log("jVarLocalData:",jVarLocalData);
   
    await ShowInBody({ inData: jVarLocalData });
};

const LocalDataMergeFunc = async ({ inBillsQrCodeData, inPosData }) => {
    return inBillsQrCodeData.map(element => {
        let jVarLocalFindData = inPosData.find(e => e.pk == element.BillPk);
        element.BillNumber = jVarLocalFindData?.BillNumber2425 ?? jVarLocalFindData?.BillNumber
        return element
    });

}

export { StartFunc };