function fetchJoke() {
  try {
    let response = UrlFetchApp.fetch("https://api.chucknorris.io/jokes/random");
    let json = JSON.parse(response.getContentText());
    Logger.log("Joke: " + json.value);
  } catch (error) {
    Logger.log("API Error: " + error.message);
  }
}
