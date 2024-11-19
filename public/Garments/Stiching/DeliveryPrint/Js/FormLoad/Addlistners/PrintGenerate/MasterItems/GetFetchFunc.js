import ConfigJson from '../../../../Config.json' with {type: 'json'};

const StartFunc = async () => {
    let jVarLocalroutePath = ConfigJson.routePath;
    let jVarLocalFetchUrl = `/${jVarLocalroutePath}/Items/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };
