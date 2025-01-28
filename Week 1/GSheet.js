function readSheetData() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let data = sheet.getRange("A1:A10").getValues();
  data.forEach(row => Logger.log(row[0])); // Log each value in the range
}
