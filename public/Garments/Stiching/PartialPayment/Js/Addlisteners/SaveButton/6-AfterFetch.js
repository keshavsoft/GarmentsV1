let StartFunc = ({ inFromFetch }) => {
  if (inFromFetch) {
    Swal.fire({
      title: "Settlement Success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        jFLocalToURL();
      }
    });
  }
};

let jFLocalToURL = () => {
  let LocalId = 'OrderNumberId';
  let LocalESTNo = document.getElementById(LocalId).innerHTML;

  const url = new URL(window.location.href);
  const params1 = new URLSearchParams(url.search);
  let NewURl = new URL("../ESTPrint/ESTPrint.html", url);
  const new_url = new URL(`${NewURl.href}?${params1}`);
  new_url.searchParams.append('StichRef', LocalESTNo);

  window.location.href = new_url.href;
};


export { StartFunc };
