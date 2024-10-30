let StartFunc = ({ inDataAsArray }) => {
    console.log("inDataAsArray:",inDataAsArray);
    
    var $table = $('#table');

    $table.bootstrapTable('load', inDataAsArray);
};

export { StartFunc };
