function generateLegalAgreement() {
  var doc = DocumentApp.openById('1ShQv4YVwd4-T2iz_Ag41VHxewZzwMrn9NZSIUQCZVM4');
  var body = doc.getBody();
  
  // Sample data for both parties
  var contractData = {
    name: "John Doe",
    address: "1234 Elm Street, Springfield",
    second_party_name: "Jane Smith",
    second_party_address: "5678 Oak Avenue, Metropolis",
    date: "January 30, 2025"
  };

  // Replace placeholders in the document
  body.replaceText('{name}', contractData.name);
  body.replaceText('{address}', contractData.address);
  body.replaceText('{second_party_name}', contractData.second_party_name);
  body.replaceText('{second_party_address}', contractData.second_party_address);
  body.replaceText('{date}', contractData.date);

  Logger.log("Legal document generated successfully!");
}
