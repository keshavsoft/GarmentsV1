let StartFunc = async () => {
    jFLocalHideSpinner();

    let jVarLocalQrCodeData = await jFLocalPromiseAll();
    console.log('jVarLocalQrCodeData:', jVarLocalQrCodeData);

    var $table = $('#table');
    $table.bootstrapTable('load', jVarLocalQrCodeData);

};

let jFLocalPromiseAll = async () => {
    let jVarLocalPromises = [jFLocalFetchQrCodes(), jFLocalFetchPurchases(), jFLocalFetchBillsQrCode(), jFLocalFetchSalesReturns()];

    let [a, b, c, d] = await Promise.allSettled(jVarLocalPromises);

    let jVarLocalReturnArray = a.value.map(LoopQrCode => {
        LoopQrCode.Purchased = "false";
        LoopQrCode.Sold = "InStoke";
        LoopQrCode.ReturnStatus = "false";
        LoopQrCode.AmtLoaded = parseInt(LoopQrCode.SalePrice) - parseInt(LoopQrCode.CostPrice);

        let LoopInideFind = b.value.find(LoopPurchase => LoopPurchase.pk === LoopQrCode.PurchasePk);


        LoopQrCode.PurchaseDate = new Date(LoopInideFind?.Date).toLocaleDateString('en-GB');
        LoopQrCode.Purchase_BillNumber = LoopInideFind?.BillNumber;

        let LoopInideSales = c.value.find(LoopPurchase => LoopPurchase.pk == LoopQrCode.pk);

        if (LoopInideSales === undefined === false) LoopQrCode.Sold = "Sold";

        let LoopInideSalesReturn = d.value.find(LoopSaleReturn => LoopSaleReturn.QrCode == LoopQrCode.pk);

        if (LoopInideSalesReturn === undefined === false) LoopQrCode.ReturnStatus = "Return";
        return LoopQrCode;

    });

    return jVarLocalReturnArray
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalFetchQrCodes = async () => {
    let jVarLocalFetchUrl = "/binV4/Generate/Show/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchPurchases = async () => {
    let jVarLocalFetchUrl = "/binV4/Vouchers/Show/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchBillsQrCode = async () => {
    let jVarLocalFetchUrl = "/binV4/BillsQrCode/Show/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchSalesReturns = async () => {
    let jVarLocalFetchUrl = "/binV4/SalesReturns/Show/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }