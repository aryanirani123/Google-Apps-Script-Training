/*

Use Triggers to Run a script every morning at 9 AM to update a 
Google Sheet with the current date and a motivational quote.

Trigger Setup: 
  1. Go to Triggers -> Add Trigger
  2. Choose the dailyReport() function
  3. Select Time-driven -> Every day at 9 AM 

*/
function dailyReport() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let date = new Date();
  let quote = "demo_quote";
  
  sheet.appendRow([date, quote]);  
}
