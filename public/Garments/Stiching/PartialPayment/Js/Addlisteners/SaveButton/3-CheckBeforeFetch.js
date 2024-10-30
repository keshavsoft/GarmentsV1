let StartFunc = () => {
    let jVarLocalAdvanceAmount = jFLocalFromDomDiscountId();
    return jVarLocalAdvanceAmount;
};

let jFLocalFromDomDiscountId = () => {
    let jVarLocalHtmlDiscountId = 'AdvanceAmountId';
    let jVarHtmlDiscountId = document.getElementById(jVarLocalHtmlDiscountId);
    let jVarHtmlDiscountIdValue = jVarHtmlDiscountId.value.trim();

    if (jVarHtmlDiscountIdValue === "") {
        jVarHtmlDiscountId.focus();
        jVarHtmlDiscountId.classList.add("is-invalid");
        return false;
    };

    let jVarLocalPaymentModeId = 'PaymentModeId';
    let jVarHtmlPaymentModeId = document.getElementById(jVarLocalPaymentModeId);
    let jVarHtmlPaymentModeIdValue = jVarHtmlPaymentModeId.value.trim();

    if (jVarHtmlPaymentModeIdValue === "") {
        jVarHtmlPaymentModeId.focus();
        jVarHtmlPaymentModeId.classList.add("is-invalid");
        return false;
    };

    return true;
};

export { StartFunc };