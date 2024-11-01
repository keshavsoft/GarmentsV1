import { StartFunc as Status200 } from "./200Status.js";
import { StartFunc as Status500 } from "./500Status.js";

let StartFunc = async ({ inFetchResponce }) => {
    console.log("inFetchResponce:", inFetchResponce);

    if (inFetchResponce.status === 200) {
        let LocalData = await inFetchResponce.json();

        Status200({ inData: LocalData })
    };
    if (inFetchResponce.status === 500) {
        let LocalData = await inFetchResponce.text();

        Status500(LocalData)
    };
};

export { StartFunc }