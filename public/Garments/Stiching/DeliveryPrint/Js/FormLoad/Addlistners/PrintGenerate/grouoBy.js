const StartFunc = (inData) => {
    return Object.entries(groupBy(inData, person => person.GST)).map(([key, value]) => {
        const GrossAmount = value.reduce((total, elem) => total + Number(elem.GrossAmount || 0), 0);
        const deliveryItemDisAmount = value.reduce((total, elem) => total + Number(elem.deliveryItemDisAmount || 0), 0);
        const sum = GrossAmount - deliveryItemDisAmount;
        const gst = parseInt(key);
        const taxableValue = sum / (1 + gst / 100);
        const gstAmount = (sum - taxableValue).toFixed(2);
        const cgstSgst = (taxableValue * (gst / 100 / 2)).toFixed(2);

        return {
            GST: key,
            Amount: sum,
            GstAmount: gstAmount,
            CGSTValue: cgstSgst,
            SGSTValue: cgstSgst,
            SGSTKey: gst / 2,
            CGSTKey: gst / 2
        };
    });
};


const groupBy = (arr, groupFn) =>
    arr.reduce((grouped, obj) => {
        const key = groupFn(obj);
        (grouped[key] = grouped[key] || []).push(obj);
        return grouped;
    }, {});

export { StartFunc };