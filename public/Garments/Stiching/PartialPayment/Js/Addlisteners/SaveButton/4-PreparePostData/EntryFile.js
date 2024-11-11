let StartFunc = () => {
    let jVarLocalReturnObject = {};

    jVarLocalReturnObject.AdvanceAmt = parseFloat(jFLocalAdvanceAmountId()) || 0;
    jVarLocalReturnObject.GAmount = parseInt(LocalFuncForjVarLocalNettAmountId()) || 0;
    jVarLocalReturnObject.BalanceAmt = jVarLocalReturnObject.GAmount - jVarLocalReturnObject.Advance;
    jVarLocalReturnObject.PaymentMode = jFLocalPaymentModeId();

    return jVarLocalReturnObject;
};

let jFLocalAdvanceAmountId = () => {
    let jVarLocalAdvanceAmountId = 'AdvanceAmountId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalAdvanceAmountId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
let LocalFuncForjVarLocalNettAmountId = () => {
    let jVarLocalNettAmountId = document.getElementById('NettAmountId');

    if (jVarLocalNettAmountId === null === false) {
        return jVarLocalNettAmountId.innerHTML;
    };
};

let jFLocalPaymentModeId = () => {
    let jVarLocalPaymentModeId = 'PaymentModeId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalPaymentModeId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value;
    };
};

export { StartFunc };