let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.status === 200) {
        const data = await inFromFetch.json();
        jFLocalToURL()
        return await data;
    } else {
        swal.fire({ icon: "error", title: "Duplicate" })
    }
};

let jFLocalToURL = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../DeliveryPrint/DeliveryPrint.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    // new_url.searchParams.append('StichRef', LocalinRowPk);
    window.location.href = new_url.href;
};

export { StartFunc };