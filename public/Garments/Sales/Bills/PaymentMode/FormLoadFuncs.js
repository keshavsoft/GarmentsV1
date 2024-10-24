import { StartFunc as ForCreateNewStartFunc } from "./FetchFuncs/ForCreateNew.js";

let StartFunc = async () => {
    let LocalDataFromFetch = await ForCreateNewStartFunc();
    if (LocalDataFromFetch.KTF) {
        let jVarLocalPaymentModeId = document.getElementById('PaymentModeId');
        let jVarLocalBillNumberId = document.getElementById('BillNumberId');

        if ("pk" in LocalDataFromFetch.JsonData) {
            jVarLocalBillNumberId.innerHTML = LocalDataFromFetch.JsonData.pk;
        };

        if ("PaymentMode" in LocalDataFromFetch.JsonData) {
            jVarLocalPaymentModeId.value = LocalDataFromFetch.JsonData.PaymentMode;
        };
    };
};

export { StartFunc };