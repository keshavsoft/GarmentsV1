import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";
import { StartFunc as ShowOnDates } from "./ShowOnDates.js";

const StartFunc = () => {
    StartFuncBuildBSTables();
    ShowOnDates();
};

export { StartFunc };
