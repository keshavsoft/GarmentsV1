import ConfigJson from '../../../../config.json' with {type: 'json'};
import { StartFunc as validate } from "../../validate.js";

let StartFunc = () => {
    LocalDeleteCookie();
    validate();
};

let LocalDeleteCookie = () => {
    let lcoalKTokenId = ConfigJson.KTokenId;
    document.cookie = `${lcoalKTokenId}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

export { StartFunc }