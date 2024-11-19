const StartFunc = async ({ StichingPOS, inDeliveryItemsGAmount }) => {
    const jVarLocalData = StichingPOS[0];
    const StichingPOSAdvanceAmount = jVarLocalData?.AdvanceAmt ?? 0;
    const jVarLocalAvanceBalnceAmount = Math.max(StichingPOSAdvanceAmount - inDeliveryItemsGAmount, 0);

    jFLocalToInputCustomerNameId(jVarLocalData.CustomerName);
    jFLocalToInputCustomerNumberId(jVarLocalData.CustomerNumber);
    jFLocalToInputOrderId(jVarLocalData.pk);
    jFLocalToInputBookingDate(jVarLocalData.DateTime);
    jFLocalToInputAdvanceAmt(jVarLocalAvanceBalnceAmount);
};

const jFLocalToInputCustomerNameId = (inValue) => updateInnerHTML('CnameId', inValue);
const jFLocalToInputCustomerNumberId = (inValue) => updateInnerHTML('CNumberId', inValue);
const jFLocalToInputOrderId = (inValue) => updateInnerHTML('OrderId', inValue);
const jFLocalToInputBookingDate = (inValue) => updateInnerHTML('BookingDate', new Date(inValue).toISOString().split('T')[0]);
const jFLocalToInputAdvanceAmt = (inValue) => updateInnerHTML('AdvanceAmtId', inValue);

const updateInnerHTML = (id, value) => {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = value;
    }
};

export { StartFunc };
