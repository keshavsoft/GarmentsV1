import { StartFunc as StartFuncButtonClickFunc } from "./GenerateQr/ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {

    if (field === 7) {
        StartFuncButtonClickFunc({ inRowData: row });
    };

};
export { StartFunc };