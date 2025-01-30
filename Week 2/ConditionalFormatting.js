function changecolor(){

  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const mysheet = sheet.getSheetByName("Student Details");

  const range = mysheet.getRange("D2:D");

  const rule = SpreadsheetApp.newConditionalFormatRule()
  .whenNumberLessThan(26)
  .setBackground("red")
  .setRanges([range])
  .build();

  const rules = mysheet.getConditionalFormatRules();

  rules.push(rule);

  mysheet.setConditionalFormatRules(rules)
}
