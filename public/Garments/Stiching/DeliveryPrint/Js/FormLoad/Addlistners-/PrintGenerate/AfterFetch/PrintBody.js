const StartFunc = ({ InData }) => {
    let LocalInData = InData;
    let localStichingPOS = JSON.parse(localStorage.getItem("StichingPOS"));
    let k1 = document.getElementById("PrintDiv");

    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += ` <span style="font-size: 13px;">#   ItemName                               Rate</span>\n`
    k1.innerHTML += ` <span style="font-size: 13px;">    GST %               Add-On             G-Rate</span>\n`
    k1.innerHTML += `----------------------------------------------\n`

    LocalInData.forEach((element, index) => {
        let LocalSerialNo = index + 1;
        let jVarLoopInsideItem = `${element.ProductName}`;
        let jVarLoopInsideGrossAmout = `${element.GrossAmount}`;
        let jVarLoopInsideAddOnAmout = `${element.AddOnAmount}`;
        let jVarLoopInsideGAmout = `${element.GAmount}`;
        let jVarLoopInsideGST = `${element.GST}`;

        k1.innerHTML += `<span style="font-size: 13px;">${LocalSerialNo.toString().padStart(2, " ")}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${" ".repeat(4)}${jVarLoopInsideItem.padEnd(34)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGrossAmout.padStart(8)}</span>\n`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGST.padStart(8)}</span> %`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideAddOnAmout.padStart(18)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGAmout.padStart(20)}</span>\n`;
        k1.innerHTML += `----------------------------------------------\n`

    });

    let jVarLocalGrossAmount = LocalInData.map(element => element.GAmount).reduce((a, b) => a + parseInt(b), 0);
    let LocalAdvance = localStichingPOS?.AdvanceAmt ?? 0;
    let LocalBalanceAmount = jVarLocalGrossAmount - LocalAdvance;

    k1.innerHTML += `               <span style="font-size: 16px; font-weight: ;">Net Amt            :  ${jVarLocalGrossAmount}</span>\n`;
    k1.innerHTML += `               <span style="font-size: 16px; font-weight: ;">Advance Amt        :  ${LocalAdvance}</span>\n`;
    k1.innerHTML += `               <span style="font-size: 17px; font-weight: bold;">Balance Amt       :  ${LocalBalanceAmount}</span>\n`;

};

export { StartFunc };