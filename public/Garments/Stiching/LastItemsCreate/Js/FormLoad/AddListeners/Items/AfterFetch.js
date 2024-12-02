let StartFunc = async ({ inFetchData }) => {
    let jVarLocalData = await inFetchData.json();
    let jVarLocalDataListId = document.getElementById("suggesteditems");

    jVarLocalData.forEach(element => {
        let jVarLocalOptions = document.createElement("option");
        jVarLocalOptions.value = element.ItemName;
        jVarLocalOptions.innerHTML = element.ItemName;
        jVarLocalDataListId.appendChild(jVarLocalOptions);
    });

};

export { StartFunc }