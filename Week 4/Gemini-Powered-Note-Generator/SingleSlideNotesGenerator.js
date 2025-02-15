function getSlideContent() {

  const slideIndex = 2
  const presentation = SlidesApp.getActivePresentation();
  const presentation_name = presentation.getName();
  const slides = presentation.getSlides();

  if (slideIndex < 0 || slideIndex >= slides.length) {
    return "Invalid slide index. Please provide a number between 1 and " + slides.length;
  }

  const slide = slides[slideIndex];
  let content = "";

  // Get shapes on the slide
  const shapes = slide.getShapes();
  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
      content += shape.getText().asString() + "\n";
  }

  // Get tables on the slide
  const tables = slide.getTables();
  for (let j = 0; j < tables.length; j++) {
    const table = tables[j];
    const numRows = table.getNumRows();
    const numCols = table.getNumColumns();

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col) {
        const cell = table.getCell(row, col);
        content += cell.getText().asString() + "\n";
      }
    }
  }


  Logger.log("Content of slide " + (slideIndex + 1) + ":\n" + content);

  const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY'

  const prompt = "Create concise and impactful speaker notes (2-3 bullet points maximum) for the following Google Slides slide content, targeting a general audience interested in automation.\n\nCloud-based JavaScript platform\nIntegrate, Automate and extend\nBuild Custom tools and workflows\nCreate web apps and add-ons \nConnect to external APIs\nWhat is Google Apps Script?\n\nSpeaker Notes:"
  + content;


  var headers = {

    "Content-Type": "application/json"
  };

  var requestBody = {

    "contents": [
      {
        "parts" : [
          {
            "text" : prompt
          }
        ]
      }
    ]
  }

  var options = {

    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(requestBody)
  };

  try{
    var response = UrlFetchApp.fetch(GEMINI_ENDPOINT,options);
    var datanew = JSON.parse(response.getContentText());
    var output = datanew.candidates[0].content.parts[0].text;
    Logger.log(datanew)
    Logger.log(output)
   //return output;
  }
  catch(error) {
    Logger.log("Error Calling Gemini API "+ error)
    //return null
  }


  let notesPage = slide.getNotesPage();
  // Find the main shape containing the notes text.
  let notes_shapes = notesPage.getShapes();

  Logger.log("Number of shapes on notes page: " + notes_shapes.length);
  Logger.log("Shapes array: " + notes_shapes); // Log the array

  // Find the notes shape (TEXT_BOX or BODY)
  let notesShape = null;
  for (let i = 0; i < notes_shapes.length; i++) {
    if (notes_shapes[i].getShapeType() == SlidesApp.ShapeType.TEXT_BOX || notes_shapes[i].getShapeType() == SlidesApp.ShapeType.BODY) {
      notesShape = notes_shapes[i];
      Logger.log("Found a suitable shape (TEXT_BOX or BODY) at index: " + i);
      break; // Exit loop once a suitable shape is found
    }
    Logger.log("Shape at index " + i + " is of type: " + notes_shapes[i].getShapeType()); //Debugging Log
  }

  if (!notesShape) {
    Logger.log("No suitable notes shape found on notes page.");
    return;
  }

  // Set the new notes text.
  let textRange = notesShape.getText(); // Get text from the FOUND shape
  textRange.setText(output);

  Logger.log("Notes added successfully to slide 0.");

}
