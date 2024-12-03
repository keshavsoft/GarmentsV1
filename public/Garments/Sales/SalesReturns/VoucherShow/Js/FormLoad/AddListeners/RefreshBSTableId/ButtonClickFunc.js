import { StartFunc as pos } from "./pos/EntryFile.js";
import { StartFunc as SRVoucher } from "./SRVoucher/EntryFile.js";
import { StartFunc as AfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {

    let [LocalPos, LocalSRVoucher] = await Promise.all([pos(), SRVoucher()]);
    let localBillsData = jFbillNumberFunc({ inSRVoucher: LocalSRVoucher, inPos: LocalPos });

    AfterFetch({ inData: localBillsData })
};

const jFbillNumberFunc = ({ inSRVoucher, inPos }) => inSRVoucher.map(element => ({ ...element, BillNumber: inPos.find(ele => ele.pk == element.pk)?.BillNumber2425 || inPos.find(ele => ele.pk == element.pk)?.BillNumber }));

export { StartFunc }