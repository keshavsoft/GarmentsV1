const StartFunc = (row, $element, field) => {
    if (field === "Print") {
        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL("../../DeliveryPrint/DeliveryPrint.html", url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        new_url.searchParams.append('StichRef', row.FK);
        new_url.searchParams.append('VoucherRef', row.pk);

        window.location.href = new_url.href;
    };
};
export { StartFunc };