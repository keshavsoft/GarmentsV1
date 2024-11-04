import KeysJson from './Keys.json' with { type: 'json' };

let StartFunc = async () => {
    let jVarLocalForm = document.getElementById("FormId");
    KeysJson.body = JSON.stringify(jFLocalserializeFormData(jVarLocalForm));
    return KeysJson;
};

function jFLocalserializeFormData(form) {
    var formData = new FormData(form);
    var serializedData = {};

    for (var [name, value] of formData) {
        let inputType = form.elements[name].type;

        // Check if the input type is number
        if (inputType === 'number') {
            value = parseInt(value);
        }

        if (serializedData[name]) {
            if (!Array.isArray(serializedData[name])) {
                serializedData[name] = [serializedData[name]];
            }
            serializedData[name].push(value);
        } else {
            serializedData[name] = value;
        }
    }

    return serializedData;
}

export { StartFunc };
