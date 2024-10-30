import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";

let StartFunc = () => {
    jFLocalHideSpinner();
    StartFuncGetFetch()
        .then(jVarLocalFetchData => {
            var $table = $('#table');
            return jFLocalInsertItemCount(jVarLocalFetchData)
                .then(processedData => {
                    console.log("processedData:",processedData);
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

            item.ItemCount = filteredData1.length;
            item.DeleverCount = filteredData2.length;
            item.PendingCount = item.ItemCount - filteredData2.length;
            item.DateTime = JLocalDateFunc({ inDate: item.DateTime });
            item.Date = new Date(item.Date).toLocaleDateString('en-GN');

            return item;
        });
        
        return processedData.reverse();
    }).catch(error => {
        console.error('Error fetching data:', error);
    });

}

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

const JLocalDateFunc = ({ inDate }) => {
    return new Date(inDate).toLocaleString("en-GB", { timeZone: "UTC", }).replace(",", "");
};

export { StartFunc };
