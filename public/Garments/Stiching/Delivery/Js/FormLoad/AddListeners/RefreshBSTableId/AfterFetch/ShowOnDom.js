let StartFunc = async ({ StichingPOS }) => {
    let jVarLocalData = StichingPOS[0];
    console.log(StichingPOS);
    jFLocalToInputCustomerNameId({ inValue: jVarLocalData.CustomerName })
    jFLocalToInputCustomerNumberId({ inValue: jVarLocalData.CustomerNumber })
    jFLocalToInputOrderId({ inValue: jVarLocalData.pk })
    jFLocalToInputBookingDate({ inValue: jVarLocalData.DateTime })
    jFLocalToInputAdvanceAmt({ inValue: jVarLocalData?.AdvanceAmt ?? 0 })

};

let jFLocalToInputCustomerNameId = ({ inValue }) => {
    let jVarLocalHtmlId = 'CnameId';
    let jVarLocalCustomerNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerNameId === null === false) {
        jVarLocalCustomerNameId.innerHTML = inValue;
    };
};

let jFLocalToInputCustomerNumberId = ({ inValue }) => {
    let jVarLocalHtmlId = 'CNumberId';
    let jVarLocalCustomerNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerNumberId === null === false) {
        jVarLocalCustomerNumberId.innerHTML = inValue;
    };
};

let jFLocalToInputOrderId = ({ inValue }) => {
    let jVarLocalHtmlId = 'OrderId';
    let jVarLocalOrderId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalOrderId === null === false) {
        jVarLocalOrderId.innerHTML = inValue;
    };
};

let jFLocalToInputBookingDate = ({ inValue }) => {
    const date = new Date(inValue);
    const dateOnly = date.toISOString().split('T')[0];
    console.log("date: ", dateOnly);
    let jVarLocalHtmlId = 'BookingDate';
    let jVarLocalBookingDate = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBookingDate === null === false) {
        jVarLocalBookingDate.innerHTML = dateOnly;
    };
}
let jFLocalToInputAdvanceAmt = ({ inValue }) => {
    let jVarLocalHtmlId = 'AdvanceAmtId';
    let jVarLocalBookingDate = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBookingDate === null === false) {
        jVarLocalBookingDate.innerHTML = inValue;
    };
}


export { StartFunc }