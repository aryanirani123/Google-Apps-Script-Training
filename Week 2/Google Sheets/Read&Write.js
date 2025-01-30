// Reading data from Google Sheets
function logStudentDetails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    Logger.log('Student name: ' + data[i][0]);
    Logger.log('Student number: ' + data[i][1]);
  }
}


// Writing data to Google Sheets

function addStudent() {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(['NAME', 'ID']);
  // Success Message
  Logger.log("Student Added to Sheet.") 
}
