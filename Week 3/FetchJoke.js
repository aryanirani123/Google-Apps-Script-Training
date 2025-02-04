// Retrieve a random chuck joke in JSON format 
// Find out more about the API: https://api.chucknorris.io/

function fetchJoke() {
 let response = UrlFetchApp.fetch("https://api.chucknorris.io/jokes/random");
 let json = JSON.parse(response.getContentText());
 Logger.log(json.value);
}
