// import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTableName = jVarGlobalTableName;

    let jVarLocalFetchUrl = `/binV4/DeliveryStiching/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

