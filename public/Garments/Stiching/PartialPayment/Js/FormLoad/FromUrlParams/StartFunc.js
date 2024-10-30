let StartFunc = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "StichRef" });
    if (jFLocalOrderNumber === null || jFLocalOrderNumber === "") {
        Swal.fire({
            title: "OrderNumber!",
            text: "Not found in URL!",
            icon: "error"
        });
        return;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }