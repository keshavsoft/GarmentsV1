import { FromNode as FetchFuncForBillsQrCode } from "../../PullData/FetchFuncForBillsQrCode.js";
import { StartFunc as InvGridStartFunc } from "../InvGrid.js";
import { StartFunc as FetchFuncsForMasters } from "../../PullData/FetchFuncsForMasters.js";
import { StartFunc as StartFuncTaxTable } from "../TaxTable.js";

let StartFunc = async ({ inRowPk }) => {
    let localpk = inRowPk

    let jVarLocalDataToShow = await FetchFuncForBillsQrCode({
        inRowPK: localpk
    });

    if (jVarLocalDataToShow.KTF) {
        let localdata = jVarLocalDataToShow.JsonData

        await FetchFuncsForMasters();

        let jVarLocalNewArray = LocalInsertGstPercentage({ inInvData: localdata });

        window.localStorage.setItem("InventoryData", JSON.stringify(localdata));

        await InvGridStartFunc();
        await StartFuncTaxTable();
    };
};

let LocalInsertGstPercentage = ({ inInvData }) => {
    let jVarLocalMastersData = localStorage.getItem("Masters");

    let jVarLocalNewArray = inInvData.map(element => {
        //ItemName
        let jVarLoopInsideMastersFind = JSON.parse(jVarLocalMastersData).find(e => e.ItemName === element.ProductName);
        // element.GST = jVarLoopInsideMastersFind.GST;

        if (jVarLoopInsideMastersFind !== undefined) {
            element.GST = jVarLoopInsideMastersFind.GST;
            // return element;
        };

        return element;
    });

    return jVarLocalNewArray;
};

export { StartFunc };