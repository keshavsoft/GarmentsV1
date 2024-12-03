import { StartFunc as StartFuncOnClickRowFunc } from "../../onClickRow/EntryFile.js";

let StartFunc = ({ inData }) => {
    inData.reverse()
    jFLocalHideSpinner();
    var $table = $('#table');
    $table.bootstrapTable({
        data: inData,
        onClickRow: StartFuncOnClickRowFunc
    });
    $table.bootstrapTable({ data: inData });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }