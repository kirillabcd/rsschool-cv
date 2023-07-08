function spacey(array){
    let currentString = ''
    let newArray = []
    for (let i = 0 ; i < array.length; i++){
    currentString += array[i].replace(/' '/g, '')
    newArray.push(currentString);
  }
    return newArray
  };