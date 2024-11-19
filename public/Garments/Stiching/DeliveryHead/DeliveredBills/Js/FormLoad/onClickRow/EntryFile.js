import { StartFunc as Addlistners } from "./Addlistners/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === "Print") {
        Addlistners({ inRowData: row });
    };
};
export { StartFunc };