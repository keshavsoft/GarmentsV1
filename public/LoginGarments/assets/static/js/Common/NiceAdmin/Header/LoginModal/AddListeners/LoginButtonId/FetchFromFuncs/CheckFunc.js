let StartFunc = () => {
    if ((jFLocalSecretId()) === false) {
        return false;
    };
    return true;
};

const jFLocalSecretId = () => {
    let jVarLocalBranchName = document.getElementById('SecretId');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };

    if ((jVarLocalBranchName.value === "") === false) {
        jVarLocalBranchName.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }