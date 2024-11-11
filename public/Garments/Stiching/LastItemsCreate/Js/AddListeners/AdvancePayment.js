const StartFunc = () => {
    let LocalId = 'AdvancePaymentId';
    let LocalButtonId = document.getElementById(LocalId);
    LocalButtonId.addEventListener("click", NavFunc)

};

const NavFunc = () => {
    let LocalId = 'OrderId';
    let LocalESTNo = document.getElementById(LocalId).innerHTML;
    window.location.href=`../PartialPayment/PartialPayment.html?StichRef=${LocalESTNo}`

    // const url = new URL(window.location.href);
    // const params1 = new URLSearchParams(url.search);
    // let NewURl = new URL("../PartialPayment/PartialPayment.html", url);
    // const new_url = new URL(`${NewURl.href}?${params1}`);
    // new_url.searchParams.append('StichRef', LocalESTNo);

    // window.location.href = new_url.href;

}
export { StartFunc };