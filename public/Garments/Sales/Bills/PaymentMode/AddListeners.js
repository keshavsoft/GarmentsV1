import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";

let StartFunc = () => {
    let jVarLocalCreateNewButtonId = document.getElementById("SaveButtonId");

    jVarLocalCreateNewButtonId.addEventListener("click", async () => {
        let LocalFromSave = await PushDataStartFunc();

        await LocalAfterSaveFunc({ inFetchPostData: LocalFromSave });
    });
};

let LocalAfterSaveFunc = ({ inFetchPostData }) => {
    if (inFetchPostData.status === 200) {
        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL("../../BillPrint/Show/Show.html", url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        window.location.href = new_url.href;

    } else {
        if ("KReason" in inFetchPostData) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: inFetchPostData.KReason,
                footer: '<a href="">Why do I have this issue?</a>'
            });
        };
    };

};

export { StartFunc };