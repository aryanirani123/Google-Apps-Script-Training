  function writeFullNames() {
    // Get the active spreadsheet and the target sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); 
    
    // Get the range of first and last names
    const lastRow = sheet.getLastRow(); // Get the last row with data
    const namesRange = sheet.getRange(2, 1, lastRow - 1, 2); // Assuming headers in row 1
    const names = namesRange.getValues(); // Retrieve first and last names
    
    // Prepare an array to store full names
    const fullNames = names.map(row => [`${row[0]} ${row[1]}`.trim()]); 
    
    // Write full names back to column C
    sheet.getRange(2, 3, fullNames.length, 1).setValues(fullNames);
    
    // Log success
    Logger.log('Full names written to column C.');
  }
