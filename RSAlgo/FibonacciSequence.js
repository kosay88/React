function fib(number) {
  var fibArr = [],
    i = 0,
    j = 1;
  fibArr.push(i);
  fibArr.push(j);
  while (fibArr.length <= number) {
    fibArr.push(fibArr[j] + fibArr[i]);
    j++;
    i++;
  }
  return fibArr;
};
console.log(fib(15));
