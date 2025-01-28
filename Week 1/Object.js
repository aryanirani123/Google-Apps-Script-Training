function objects(){

    const car = {
  
      "name" : "Tesla",
      "model number" : 3,
      "Colour" : "Green",
      "YOB" : 2020,
    }
  
    Logger.log(car)
  
  
    const person = {
  
      "name" : "Aryan",
      "age" : 18,
      "YOB" : 2003,
      "Height" : "6 feet",
  
    }
  
    person.Height = "6.9 feet";
  
    person.status = "Student";
  
    Logger.log(person)
  
  
    Logger.log(person.name)
    console.log(person.age)
    console.log(person.YOB)
    Logger.log(person.Height)
  
  }
