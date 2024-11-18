let StartFunc = (inFromFetch) => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();
    localFunc();

    // $table.bootstrapTable("refresh");
};

const localFunc = () => {
    const productNameInput = document.getElementById('ProductName');
    const grossAmountInput = document.getElementById('GrossAmount');
    const itemDescriptionInput = document.getElementById('ItemDescription');
    const AddOnAmountInput = document.getElementById('AddOnAmount');
    const QtyInput = document.getElementById('Qty');


    // Clear the values of the input fields
    productNameInput.value = '';
    grossAmountInput.value = '';
    itemDescriptionInput.value = '';
    AddOnAmountInput.value = '';
    QtyInput.value = '';
    productNameInput.focus();
}
export { StartFunc }