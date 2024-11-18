import { StartFunc as SalesReturns } from "./SalesReturns/EntryFile.js";
import { StartFunc as BillsQrCode } from "./BillsQrCode/EntryFile.js";
import { StartFunc as pos } from "./pos/EntryFile.js";
import { StartFunc as SRVoucher } from "./SRVoucher/EntryFile.js";
import { StartFunc as AfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {

    let [localSalesReturns, localBillsQrCode, LocalPos, LocalSRVoucher] = await Promise.all([SalesReturns(), BillsQrCode(), pos(), SRVoucher()]);
    let localBillsData = billFunc({ inBillsQrCode: localBillsQrCode, inPos: LocalPos });

    let jVarLocaljFMergeDataFunc = jFMergeDataFunc({ inSalesReturns: localSalesReturns, inBillsData: localBillsData });
    let localSalesRetunQrCoseData = jFforSalesRef({ inSalesRetunsData: jVarLocaljFMergeDataFunc, inSRVoucher: LocalSRVoucher });

    AfterFetch({ inData: localSalesRetunQrCoseData })
};

const jFMergeDataFunc = ({ inSalesReturns, inBillsData }) => inSalesReturns.map(element => ({ ...element, BillNumber: inBillsData.find(ele => ele.pk == element.QrCode)?.BillNumber }));
const billFunc = ({ inBillsQrCode, inPos }) => inBillsQrCode.map(element => ({ ...element, BillNumber: inPos.find(ele => ele.pk == element.BillPk)?.BillNumber2425 || inPos.find(ele => ele.pk == element.BillPk)?.BillNumber }));
const jFforSalesRef = ({ inSalesRetunsData, inSRVoucher }) => inSalesRetunsData.map(element => ({ ...element, SalesReturnRef: inSRVoucher.find(ele => ele.pk == element.SRRef)?.UuId }));

export { StartFunc }