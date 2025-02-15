function getSlides() {

  let presentation = SlidesApp.getActivePresentation();
  let slide = presentation.getSlides()[0];  // Get the FIRST slide (index 0)

  let notes = "This is my note";

  if (!slide) {
    Logger.log("No slide found at index 0.");
    return;
  }
  // Get the notes page
  let notesPage = slide.getNotesPage();

  // Find the main shape containing the notes text.
  let shapes = notesPage.getShapes();

  Logger.log("Number of shapes on notes page: " + shapes.length);
  Logger.log("Shapes array: " + shapes); // Log the array

  // Find the notes shape (TEXT_BOX or BODY)
  let notesShape = null;
  for (let i = 0; i < shapes.length; i++) {
    if (shapes[i].getShapeType() == SlidesApp.ShapeType.TEXT_BOX || shapes[i].getShapeType() == SlidesApp.ShapeType.BODY) {
      notesShape = shapes[i];
      Logger.log("Found a suitable shape (TEXT_BOX or BODY) at index: " + i);
      break; // Exit loop once a suitable shape is found
    }
    Logger.log("Shape at index " + i + " is of type: " + shapes[i].getShapeType()); //Debugging Log
  }

  if (!notesShape) {
    Logger.log("No suitable notes shape found on notes page.");
    return;
  }

  // Set the new notes text.
  let textRange = notesShape.getText(); // Get text from the FOUND shape
  textRange.setText(notes);

  Logger.log("Notes added successfully to slide 0.");
}

