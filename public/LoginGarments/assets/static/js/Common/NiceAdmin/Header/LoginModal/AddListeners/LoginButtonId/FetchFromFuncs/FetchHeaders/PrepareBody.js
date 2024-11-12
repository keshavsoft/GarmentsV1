let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};

    let jVarLocalPassword = document.getElementById('SecretId').value;

    jVarLocalBodyKeysJson.Secret = parseInt(jVarLocalPassword);

    return jVarLocalBodyKeysJson;
};


export { StartFunc }