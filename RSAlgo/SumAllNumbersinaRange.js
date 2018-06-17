function sumAll(arr) {
  var sum=0;
  for (var i=arr[0]; i<=arr[arr.length-1]; i++){
    sum += i;
  }
  return sum;
}
console.log(sumAll([1, 4]));


// recursive solution:
function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]),
      max = Math.max(arr[0], arr[1]);

  if (min === max)
    return (min);
  return max + sumAll([min, max - 1]);
}
console.log(sumAll([1, 4]));
