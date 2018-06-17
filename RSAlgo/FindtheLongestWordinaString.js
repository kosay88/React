function LongestWordinaString(str) {
  // Split the string into an array of strings
  var arr = str.split(' ');
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if(longest<arr[i].length){
        longest=arr[i].length
      }
  }
  return longest;
}
console.log(LongestWordinaString("May the force be with you"));
console.log(LongestWordinaString("The quick brown fox jumped over the lazy dog"));
