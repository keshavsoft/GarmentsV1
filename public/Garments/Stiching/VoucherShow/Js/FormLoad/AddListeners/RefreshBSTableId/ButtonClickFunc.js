import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = () => {
    jFLocalHideSpinner();
    StartFuncGetFetch()
        .then(jVarLocalFetchData => {
            var $table = $('#table');
            return jFLocalInsertItemCount(jVarLocalFetchData)
                .then(processedData => {
                    $table.bootstrapTable("load", processedData);
                });
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });
};

function jFLocalInsertItemCount(inData) {
    return Promise.all([
        fetch('/binV4/BillsStiching/Show/DataOnly').then(response => {
            if (!response.ok) {
                throw new Error('Failed to load Bill Data');
            }
            return response.json();
        }),
        fetch('/binV4/DeliveryStiching/Show/DataOnly').then(response => {
            if (!response.ok) {
                throw new Error('Failed to ,oad Delivery data');
            }
            return response.json();
        })
    ]).then(([fetchData1, fetchData2]) => {
        const processedData = inData.map(item => {
            const filteredData1 = fetchData1.filter(fetchItem => fetchItem.FK === item.pk.toString());
            const filteredData2 = fetchData2.filter(fetchItem => fetchItem.FK === item.pk.toString());

            item.GAmount = filteredData1.map(e => e.GAmount).reduce((a, b) => a + b, 0);
            item.ItemCount = filteredData1.length;
            item.DeleverCount = filteredData2.length;
            item.PendingCount = item.ItemCount - filteredData2.length;

            return item;
        });
        const filteredData = processedData.filter(item => item.PendingCount !== 0);

        return filteredData.reverse();
    }).catch(error => {
        console.error('Error fetching data:', error);
    });

}

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc };
