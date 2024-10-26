// import ConfigJson from '../../../../Confi`g.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTableName = jVarGlobalTableName;

    let jVarLocalFetchUrl = `/binV4/BillsStiching/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

