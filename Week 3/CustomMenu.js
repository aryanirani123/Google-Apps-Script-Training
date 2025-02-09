function onOpen() {
    var ui = SpreadsheetApp.getUi(); // Get the UI for Google Sheets
    ui.createMenu("My Custom Menu") // Create a new menu
      .addItem("Show Alert", "showAlert") // Add a menu item
      .addItem("Log Message", "logMessage") // Add another item
      .addSeparator() // Add a separator line
      .addSubMenu(ui.createMenu("More Options") // Create a sub-menu
        .addItem("Show Toast", "showToast")
        .addItem("Open Sidebar", "openSidebar"))
      .addToUi(); // Add the menu to the UI
  }
  
  function showAlert() {
    SpreadsheetApp.getUi().alert("Hello! This is an alert.");
  }
  
  function logMessage() {
    Logger.log("Custom menu item clicked!");
  }
  
  function showToast() {
    SpreadsheetApp.getActiveSpreadsheet().toast("This is a toast message!", "Notice");
  }
  
  function openSidebar() {
    var html = HtmlService.createHtmlOutput("<h3>Hello from Sidebar!</h3>")
      .setTitle("My Sidebar");
    SpreadsheetApp.getUi().showSidebar(html);
  }
  
