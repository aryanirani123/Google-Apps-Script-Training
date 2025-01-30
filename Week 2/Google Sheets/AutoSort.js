function autoSortStudents() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Student Details");
  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
  
  // Sort by Marks (column 4) in Descending Order
 range.sort({column: 4, ascending: false});
}
