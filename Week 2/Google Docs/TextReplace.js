function textReplace() {

  const doc = DocumentApp.openById("19u0fLQ0wRtUKqot1zqSY4KyUqFT4bjW9NLRGt8pavLo");
  const body = doc.getBody();
  body.replaceText('{name}','John Doe');
  body.replaceText('{address}','123 Main St, NY');

}
