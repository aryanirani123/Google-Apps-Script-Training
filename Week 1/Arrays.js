function arrayfunction(){
  
    const array1 = [];
    const namesarray = ['Aryan','Neil','Raj'];
    //                    0       1      2
    Logger.log(namesarray)
  
    Logger.log(namesarray[0])
    Logger.log(namesarray[1])
    Logger.log(namesarray[2])
  
  }
  
  
  function addelements(){
  
    const array = [1,2,3,4,5,7];
  
    array.unshift(45);
  
    Logger.log(array);
  
    array.splice(2,0,70)
  
    Logger.log(array)
  
  
    array.push(100)
    Logger.log(array)
  
  
  }
  
  function deleteelements(){
  
    const array = [1,2,3,4,5,7];
  
    //array.shift()
  
    //Logger.log(array)
  
    array.pop()
    Logger.log(array)
  
    array.splice(2,1);
    Logger.log(array)
  
  
  }
