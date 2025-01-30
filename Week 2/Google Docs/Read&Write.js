//Reading Data from Google Docs

function fetchTemplate() {

  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  Logger.log("TEMPLATE");
  Logger.log(body)
}

//Write data to Google Docs

function writedata() {

  const doc = DocumentApp.create("My DOC");
  const body = doc.getBody();
  body.appendParagraph("Hello World");

  //Apply Styles
  body.appendParagraph("Styled Text")
      .setBold(true)
      .setForegroundColor('#ff0000')

}
