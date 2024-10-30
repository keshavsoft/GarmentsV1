let StartFunc = () => {
    let jVarLocalReturnObject = {};

    jVarLocalReturnObject.Advance = parseFloat(jFLocalAdvanceAmountId()) || 0;
    jVarLocalReturnObject.GAmount = parseInt(LocalFuncForjVarLocalNettAmountId()) || 0;

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

export { StartFunc };