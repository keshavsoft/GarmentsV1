import { StartFunc as GetFetchFunc } from "./GetFetchFunc.js";

const StartFunc = async ({ inRowData }) => {
    let response = await GetFetchFunc({ inRowData });

    if (response.status === 200) {
        return await response.json();
    } else {
        swal.fire({ icon: "error", title: "no data" })
    };
};

export { StartFunc };
