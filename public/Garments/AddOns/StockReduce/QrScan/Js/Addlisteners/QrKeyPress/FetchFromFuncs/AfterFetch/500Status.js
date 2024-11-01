let StartFunc = (inFetchResponce) => {

    swal.fire({
        icon: "error",
        text: `${inFetchResponce}`,
        title: "Check And Scan"
    })
};

export { StartFunc }