function largestOfFour(arr) {
  var result=[];
  var largestval;
  for (var i = 0; i < arr.length; i++) {


    largestval = arr[i][0];
    for (var j = 1; j < arr.length; j++) {
      if (largestval<arr[i][j]) {
        largestval = arr[i][j]
      }
    }
    result.push(largestval);
  }
  return result;
}
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
