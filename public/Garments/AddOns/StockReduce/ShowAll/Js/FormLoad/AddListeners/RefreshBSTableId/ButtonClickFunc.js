import { StartFunc as fetchBillsQrCode } from "./fetchBillsQrCode.js";
import { StartFunc as fetchpos } from "./fetchpos.js";

let StartFunc = async () => {
    jFLocalHideSpinner();

    let jVarLocalQrCodeData = await jFLocalPromiseAll();
    jVarLocalQrCodeData = jVarLocalQrCodeData.filter(e => e.UserPK == 902);
    jVarLocalQrCodeData.reverse();

    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalQrCodeData
    });
};

let jFLocalPromiseAll = async () => {
    let jVarLocalPromises = [fetchBillsQrCode(), fetchpos()];

    let [a, b] = await Promise.allSettled(jVarLocalPromises);
    let inBillsQrCodeData = a.value;
    let inPosData = b.value;

    return inBillsQrCodeData.map(element => {
        let jVarLocalFindData = inPosData.find(e => e.pk == element.BillPk);
        let BillNumber = jVarLocalFindData ? (jVarLocalFindData.BillNumber2425 ?? jVarLocalFindData.BillNumber) : element.BillNumber;
        return { ...element, BillNumber };
    });

};
let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }