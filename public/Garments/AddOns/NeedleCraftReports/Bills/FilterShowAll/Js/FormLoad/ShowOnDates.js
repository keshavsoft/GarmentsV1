const StartFunc = () => {
    setDateTo7DaysBack();
    setDateToToday();
};

function setDateTo7DaysBack() {
    let today = new Date();
    let sevenDaysBack = new Date(today);
    sevenDaysBack.setDate(today.getDate() - 7);
    
    let year = sevenDaysBack.getFullYear();
    let month = ("0" + (sevenDaysBack.getMonth() + 1)).slice(-2);
    let day = ("0" + sevenDaysBack.getDate()).slice(-2);

    let formattedDate = `${year}-${month}-${day}`;
    document.getElementById("startDateId").value = formattedDate;
  };

  function setDateToToday() {
    let today = new Date();
    
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);

    let formattedDate = `${year}-${month}-${day}`;
    document.getElementById("endDateId").value = formattedDate;
  }



export { StartFunc };
