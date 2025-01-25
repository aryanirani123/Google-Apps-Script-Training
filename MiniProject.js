function greetNames() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let names = sheet.getRange("A1:A10").getValues();
  names.forEach(row => Logger.log(`Hello, ${row[0]}!`));
}
