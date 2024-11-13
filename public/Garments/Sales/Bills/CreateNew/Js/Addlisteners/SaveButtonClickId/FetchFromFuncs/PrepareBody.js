let StartFunc = async () => {
    let jVarLocalForm = document.getElementById("FormId");

    let KeysJson = jFLocalserializeFormData(jVarLocalForm);

    return KeysJson;
};

function jFLocalserializeFormData(form) {
    var formData = new FormData(form);
    var serializedData = {};

    for (var [name, value] of formData) {
        let inputElement = form.elements[name];
        
        // Check if the input type is 'number' and convert the value to a number
        if (inputElement.type === 'number') {
            value = Number(value);
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
};

export { StartFunc };
