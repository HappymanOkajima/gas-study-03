function doGet(e: any) :any {
    const template = 'index';
    return HtmlService.createTemplateFromFile(template).evaluate();
}
function include(filename: string) :any {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}
function getSheetData() :string[][] {
    const ss = SpreadsheetApp.openById('1Lzso4AScXo3t-NTzyxRJRRy9Nds0yz0DMcWFkMVXrlc');
    const sheet = ss.getSheets()[0];
    return sheet.getDataRange().getDisplayValues();
}
function findAll() :{}[] {
    const data = getSheetData().slice(1);
    return data.map(row => {
        return {
            location: row[2],
            name: row[1]
        };
    });
}
function findByLocation(location: string) :{}[] {
    if (!location) {
        return findAll();
    }
    const data = getSheetData().slice(1);
    return data.filter(row => row[2] === location)
    .map(row => {
        return {
            location: row[2],
            name: row[1]
        };
    });
}
