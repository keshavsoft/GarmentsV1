import { StartFunc as StichingPOS } from "./StichingPOS/2-ButtonClickFunc.js";
import { StartFunc as StichingBills } from "./StichingBills/2-ButtonClickFunc.js";

const StartFunc = () => {
     StichingPOS();
     StichingBills();
};
export { StartFunc };