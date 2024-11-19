const startFunc = ({ InData }) => {
    const k1 = document.getElementById("PrintDiv");

    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `<span style="font-size: 13px;">GST%  BasicRate  CGST%  CGST    SGST%    SGST</span>\n`
    k1.innerHTML += `----------------------------------------------\n`

    InData.forEach(element => {
        k1.innerHTML += `<span style="font-size: 13px;">${`${element.GST}%`.padEnd(4)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${`${element.GstAmount}`.padStart(8)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${`${element.CGSTKey}%`.padStart(9)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${`${element.CGSTValue}`.padStart(7)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${`${element.SGSTKey}%`.padStart(9)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${`${element.SGSTValue}`.padStart(8)}</span>\n`;
    });

    const jVarLocalGST = InData.map(e => parseFloat(e.GstAmount) || 0);
    const jVarLocalCGSTValue = InData.map(e => parseFloat(e.CGSTValue) || 0);
    const jVarLocalSGSTValue = InData.map(e => parseFloat(e.SGSTValue) || 0);

    const jVarLocalGstTaxaBleAmount = jVarLocalGST.reduce((a, b) => a + b, 0).toFixed(2);
    const jVarLocalTotalCGSTValue = jVarLocalCGSTValue.reduce((a, b) => a + b, 0).toFixed(2);
    const jVarLocalTotalSGSTValue = jVarLocalSGSTValue.reduce((a, b) => a + b, 0).toFixed(2);

    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `<span style="font-size: 13px;">Total:  ${jVarLocalGstTaxaBleAmount.padStart(5)}</span>`;
    k1.innerHTML += `<span style="font-size: 13px;">${jVarLocalTotalCGSTValue.padStart(13)}</span>`;
    k1.innerHTML += `<span style="font-size: 13px;">${jVarLocalTotalSGSTValue.padStart(17)}</span>\n`;
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `<span style="font-size: 16px;">
* Terms And Conditions *
Exchange Time Between 1-4PM,
Goods Will Be Exchanged WithIn 7Days 
of Purchase Date,No Colour Guarantee
Thank you for your visit        
Have a nice day
</span>`;
};

export { startFunc };
