function main() {
  let salesdata = getSalesData();
  let reportID = createReport(salesdata);
  emailReport(reportID);
}


function getSalesData() {

  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sales Data");
  //Consider dynamic range to avoid hardcoding "A2:E9"
  let dataRange = sheet.getDataRange(); //Gets the range of the sheet that contains data
  let numRows = dataRange.getNumRows();
  let numColumns = dataRange.getNumColumns();

  //Adjust range to start at row 2 and not include headers in the getValues call
  let data = sheet.getRange(2, 1, numRows - 1, numColumns).getValues();
  return data;
}


function createReport(data) {
  let doc = DocumentApp.create("Weekly Sales Report");
  let body = doc.getBody();
  body.appendParagraph("Weekly Sales Report").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph("Summary of Regional and Category-wise Sales Data");

  let table = body.appendTable();

  //Create Header row
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sales Data"); // get header from sheet
  let headers = sheet.getRange("A1:E1").getValues()[0]; // get header values
  let headerRow = table.appendTableRow(); // append a header row
  for (let header of headers) {
    let cell = headerRow.appendTableCell(header);
    cell.setBackgroundColor("#4CAF50")
      .setForegroundColor("#ffffff")
      .setBold(true)
      .setFontSize(12);

  }

  //Populate data rows
  for (var i = 0; i < data.length; i++) {
    let tr = table.appendTableRow();
    for (var j = 0; j < data[i].length; j++) {
      let cell = tr.appendTableCell(data[i][j]);
      cell.setForegroundColor("#000000"); // Set text color to black
    }
  }


  Logger.log("Table inserted successfully.");
  // Important: Flush the document to ensure all changes are saved. This is crucial.
  doc.saveAndClose();
  Utilities.sleep(2000); // Wait 2 seconds to allow changes to fully propagate
  return doc.getId();
}

function emailReport(docID) {

  let doc = DriveApp.getFileById(docID);
  let pdfBlob = doc.getAs(MimeType.PDF)
  GmailApp.sendEmail("aryanirani123@gmail.com", 'Weekly Sales Report', 'Please find the attached detailed report', {
    attachments: [pdfBlob],
    name: "Sales Report Bot"
  })
}
