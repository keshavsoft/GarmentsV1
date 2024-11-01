const StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        let isValid = true;

        if (LoopItem.type === 'number') {
            LoopItem.value = parseFloat(LoopItem.value);
        }

        if (typeof LoopItem.value === 'string') {
            if (LoopItem.value.trim().length === 0) {
                isValid = false;
            }

            if (LoopItem.name === 'Mobile' && LoopItem.value.trim().length !== 10) {
                document.getElementById("MobileClass").innerHTML = "must be 10";
                isValid = false;
            }

            if (isValid) {
                LoopItem.classList.remove("is-invalid");
            } else {
                LoopItem.classList.add("is-invalid");
                LoopItem.focus();
                jVarLocalReturnTF = false;
            }
        }
    });

    return jVarLocalReturnTF;
};

export { StartFunc };
