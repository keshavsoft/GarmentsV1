import { StartFunc as PrintGenerate } from "./PrintGenerate/EntryFile.js";

const StartFunc = ({ inRowData }) => {
    PrintGenerate({ inRowData });
};

export { StartFunc };
