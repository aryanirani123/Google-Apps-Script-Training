function loops(){


    const namesarray = ['Aryan','Neil','Raj'];
    Logger.log(namesarray)
  /*
    Logger.log(namesarray[0])
    Logger.log(namesarray[1])
    Logger.log(namesarray[2])
  */
  
    for(let i = 0;i<namesarray.length;i++){
  
      Logger.log(namesarray[i])
  
  
    }
  
  
  }
  
  function forinloop(){
  
      const car = {
  
      "name" : "Tesla",
      "model number" : 3,
      "Colour" : "Green",
      "YOB" : 2020,
    }
  
  
    for(const details in car){
  
      Logger.log(details)
  
      Logger.log(car[details])
  
  
    }
  
  }
  
  function ForEachLoop(){
  
    let sum = 0;
  
    const numbers = [65,44,12,4];
  
    numbers.forEach(myfunction);
  
    Logger.log(sum)
  
    function myfunction(item){
  
      sum +=item
  
    }
  
  }


  
