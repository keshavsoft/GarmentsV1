import columnsJson from './option.json' with {type: 'json'};

const StartFunc = () => {
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable(columnsJson);
};

export { StartFunc };