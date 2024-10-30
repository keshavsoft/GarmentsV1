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

    return true;
};

export { StartFunc };