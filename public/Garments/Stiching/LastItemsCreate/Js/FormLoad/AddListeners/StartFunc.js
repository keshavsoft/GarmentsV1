import { StartFunc as StichingPOS } from "./StichingPOS/EntryFile.js";
import { StartFunc as Items } from "./Items/EntryFile.js";

let StartFunc = async () => {
    StichingPOS();
    Items();
};

export { StartFunc };