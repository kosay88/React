function titleCase (str){
  str = str.toLowerCase(); //Lowercase all letters in the string
  str = str.split(' ') //Split the string into an array of strings
  for (var i=0; i<str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    //change the first letter to uppercase + the rest of the word without the first one
  }
  return str.join(' '); //joining the array again into a string
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
