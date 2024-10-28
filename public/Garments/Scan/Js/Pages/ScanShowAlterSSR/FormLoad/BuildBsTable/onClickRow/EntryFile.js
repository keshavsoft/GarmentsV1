const StartFunc = (row, $element, field) => {
    if (field === "RowScan") {
        window.location.href = `/Garments/Scan/HtmlFiles/ScanAlterSSR.html?inRowPk=${row.pk}`
    }
    if (field === "RowShow") {
        window.location.href = `/Garments/Scan/HtmlFiles/ScanRowShowSubTable.html?inRowPk=${row.pk}`
    }
};
export { StartFunc };