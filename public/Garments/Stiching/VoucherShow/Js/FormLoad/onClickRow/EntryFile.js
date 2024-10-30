// import { StartFunc as StartFuncButtonClickFunc } from "./QRGenerate/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    console.log("field:", field);
    if (field === 10) {
        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL("../ESTPrint/ESTPrint.html", url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        new_url.searchParams.append('StichRef', row.pk);

        window.location.href = new_url.href;
        // StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };