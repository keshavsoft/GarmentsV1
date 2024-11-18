const StartFunc = ({ inData, }) => {
    let jVarLocalData = inData;
    let localAddOnAmount = jVarLocalData .map(e => parseInt(e.AddOnAmount) || 0) .reduce((a, b) => a + b, 0);
    
    let localAmount = jVarLocalData.map(e => e.GrossAmount).reduce((a, b) => a + parseInt(b), 0);
    let localGAmount = jVarLocalData.map(e => e.GAmount).reduce((a, b) => a + parseInt(b), 0);
    AddOnAmountFunc({ inData: localAddOnAmount });
    AmountFunc({ inData: localAmount });
    NettAmountFunc({ inData: localGAmount });

};

let AddOnAmountFunc = ({ inData }) => {
    let jVarLocalHtmlId = 'AddOnAmountId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.value = inData;
};

let AmountFunc = ({ inData }) => {
    let jVarLocalHtmlId = "AmountId";
    let jVarLocalOrderInfoCustomerNameId = document.getElementById(jVarLocalHtmlId);

    jVarLocalOrderInfoCustomerNameId.value = inData;
};

let NettAmountFunc = ({ inData }) => {
    let jVarLocalHtmlId = 'NettAmountId';
    let jVarLocalOrderDate = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderDate.innerHTML = inData;
};
export { StartFunc };