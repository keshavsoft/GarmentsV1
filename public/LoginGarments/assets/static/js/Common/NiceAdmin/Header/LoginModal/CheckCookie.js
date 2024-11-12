import ConfigJson from '../../config.json' with {type: 'json'};

const StartFunc = () => {
    const myCookieValue = getCookie(ConfigJson.KTokenId);

    if ((myCookieValue === "") === false) {
        return true
    };
    return false;
};

const getCookie = (name) => document.cookie.split('; ').reduce((r, v) => v.startsWith(name + '=') ? v.split('=')[1] : r, '');

export { StartFunc };