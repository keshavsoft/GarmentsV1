import { StartFunc as StartFuncBSTableLoad } from "./BSTableLoad.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

let StartFunc = async ({ StichingPOS, BillsStiching, DeliveryStiching }) => {

    let a1 = DeliveryStiching.map(el => el.GAmount).reduce((a, b) => a + parseInt(b), 0);
    let a2 = DeliveryStiching .map(el => parseInt(el.deliveryItemDisAmount) || 0) .reduce((a, b) => a + b, 0);
    let jVarLocalDeliveryItemsGAmount = a1 - a2;
    StartFuncShowOnDom({ StichingPOS, inDeliveryItemsGAmount: jVarLocalDeliveryItemsGAmount })
    var $table = $('#table');

    if (BillsStiching.status === 200) {
        let Localdata = await BillsStiching.json();
        let JVarLocalDeliveryStichingData = DeliveryStiching;

        const unmatchedItems = Localdata.filter(item1 => !JVarLocalDeliveryStichingData.some(item2 => item1.pk === item2.Itempk));

        jFLocalHideSpinner();
        $table.bootstrapTable({
            data: unmatchedItems,
            onClickRow: StartFuncBSTableLoad

        });

    } else {
        swal.fire({ icon: "error", title: "No data" })
    };

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }