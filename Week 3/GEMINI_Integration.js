function GEMINI(prompt) {
    const GEMINI_KEY = 'YOUR_API_KEY';
    const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;
    var headers = {
      "Content-Type": "application/json"
      };
    var requestBody = {
      "contents": [
        {
          "parts": [
            {
            "text": prompt
            }
          ]
        }
      ]
    };
    var options = {
      "method": "POST",
      "headers": headers,
      "payload": JSON.stringify(requestBody)
    };
    try {
      var response = UrlFetchApp.fetch(GEMINI_ENDPOINT, options);
      var datanew = JSON.parse(response.getContentText());
      var output = datanew.candidates[0].content.parts[0].text
      Logger.log(datanew)
      Logger.log(output)
      return output;
    } catch (error) {
      Logger.log('Error calling Gemini API: ' + error);
      return null;
    }
  }



