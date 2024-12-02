let StartFunc = () => {
    return StartCheckFunc();
};

let StartCheckFunc = () => {
    let jVarLocalForm = document.getElementById("ProductName");
    if (jVarLocalForm.value === "") {
        jVarLocalForm.classList.add("is-invalid");
        jVarLocalForm.focus();
        return false;
    };

    let jVarLocalFormGrossAmount = document.getElementById("GrossAmount");
    if (jVarLocalFormGrossAmount.value === "") {
        jVarLocalFormGrossAmount.classList.add("is-invalid");
        jVarLocalFormGrossAmount.focus();
        return false;
    };

    return true;
};

export { StartFunc }