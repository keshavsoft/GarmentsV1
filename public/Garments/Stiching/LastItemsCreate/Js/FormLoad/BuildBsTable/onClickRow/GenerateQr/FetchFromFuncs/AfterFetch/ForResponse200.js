let StartFunc = async () => {
    var $table = $('#table');

    $table.bootstrapTable("refresh");
    Swal.fire({
        icon: "success",
        title: "Deleted success"
    });
};

export { StartFunc };