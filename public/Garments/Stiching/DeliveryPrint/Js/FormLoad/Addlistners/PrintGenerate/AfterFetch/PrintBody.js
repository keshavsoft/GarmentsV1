const StartFunc = ({ InData, inAdvanceAmt }) => {
    let LocalInData = InData;
    let LocalinAdvanceAmt = inAdvanceAmt;
    let k1 = document.getElementById("PrintDiv");

    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += ` <span style="font-size: 13px;">#   ItemName          GST %            Rate</span>\n`
    k1.innerHTML += `     <span style="font-size: 13px;">AddOn             Discount         G-Rate</span>\n`
    k1.innerHTML += `---------------------------------------------\n`
    LocalInData.forEach((element, index) => {
        
        let LocalSerialNo = index + 1;
        let jVarLoopInsideItem = `${element.ProductName}`;
        let jVarLoopInsideDisPercentage = `${element.deliveryItemDisAmount}`;
        if (!jVarLoopInsideDisPercentage) {
            jVarLoopInsideDisPercentage = "0";
        }
        let jVarLoopInsideGrossAmout = `${element.GrossAmount}`;
        let jVarLoopInsideAddOnAmount = `${element.AddOnAmount}`;
        if (!jVarLoopInsideAddOnAmount) {
            jVarLoopInsideAddOnAmount = "0";
        }
        let jVarLoopInsideAmout = `${element.GAmount - element.deliveryItemDisAmount}`;

        k1.innerHTML += `<span style="font-size: 13px;">${LocalSerialNo.toString().padStart(2, " ")}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${" ".repeat(4)}${jVarLoopInsideItem.padEnd(12)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${element.GST.padStart(7)}</span> %`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGrossAmout.padStart(18)}</span>\n`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideAddOnAmount.padStart(8)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideDisPercentage.padStart(17)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideAmout.padStart(20)}</span>\n`;
        k1.innerHTML += `---------------------------------------------\n`

    });

    let jVarLocalGrossAmount = LocalInData.map(element => element.GAmount).reduce((a, b) => a + parseInt(b), 0);
    let jVarLocalDesAmount = LocalInData.map(element => element.deliveryItemDisAmount ? element.deliveryItemDisAmount : 0).reduce((a, b) => a + parseInt(b), 0);
    if (!jVarLocalDesAmount) {
        jVarLocalDesAmount = 0;
    }
    let LocalNetAmount = jVarLocalGrossAmount - jVarLocalDesAmount;
    let JvarLocalWithAdvanceNetAmt = LocalNetAmount - LocalinAdvanceAmt
    k1.innerHTML += `                       <span style="font-size: 16px; font-weight: bold;">Gross Amt  :  ${LocalNetAmount}</span>\n`;
    k1.innerHTML += `                       <span style="font-size: 16px; font-weight: bold;">Advance Amt:  ${LocalinAdvanceAmt}</span>\n`;
    k1.innerHTML += `                       <span style="font-size: 16px; font-weight: bold;">Net Amt    :  ${JvarLocalWithAdvanceNetAmt}</span>\n`;


};

export { StartFunc };