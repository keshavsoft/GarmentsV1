let StartFunc = () => {
    if (jFLocalDescription() === false) return false;
    // if (jFLocalRateId() === false) return false;

    return true;
};

let jFLocalDescription = () => {
    let jVarLocalId = document.getElementById("Description");
    let jVarLocalHtmlValue = jVarLocalId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalId.classList.add("is-invalid");
        jVarLocalId.focus();
        return false;
    } else {
        jVarLocalId.classList.remove("is-invalid");
        jVarLocalId.classList.add("is-valid");
    };

    return true;

};

let jFLocalRateId = () => {
    let jVarLocalId = document.getElementById("GSTId");
    let jVarLocalHtmlValue = jVarLocalId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalId.classList.add("is-invalid");
        jVarLocalId.focus();
        return false;
    } else {
        jVarLocalId.classList.remove("is-invalid");
        jVarLocalId.classList.add("is-valid");
    };

    return true;

};



export { StartFunc };