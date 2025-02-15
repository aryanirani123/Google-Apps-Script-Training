function applyLabel() {

  const threads = GmailApp.getInboxThreads();

  const myLabel = "Aryan Irani";

  const all_labels = [];
  //Logger.log(typeof(all_labels));

  GmailApp.getUserLabels().forEach((label)=>{

    all_labels.push(label.getName());

  })

  Logger.log(all_labels);

  let tempLabel;

  if(all_labels.includes(myLabel)){
    tempLabel = GmailApp.getUserLabelByName(myLabel);
  }

  else{
    GmailApp.createLabel(myLabel)
  }

  Logger.log(tempLabel)

  threads.forEach(function(message){

    //Logger.log(message);
    const first_message = message.getFirstMessageSubject();
    if(first_message.includes("Priya Mary")){

      message.addLabel(tempLabel);
      //message.moveToArchive();
    }
  })

  
}
