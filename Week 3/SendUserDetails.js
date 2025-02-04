function sendUserData() {
  try {
    let url = "https://jsonplaceholder.typicode.com/posts"; 
    let payload = {
      "name": "John",
      "email": "john@example.com"
    };

    let options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload)
    };

    let response = UrlFetchApp.fetch(url, options);
    Logger.log("Response: " + response.getContentText());
  } catch (error) {
    Logger.log("Error: " + error.toString());
  }
}
