var fizzbuzz=[];
for (var i=1 ; i<=135 ; i++){
   if(i%3 === 0 && i%5 === 0){
    fizzbuzz.push('fizzbuzz');
   }
  else if(i%3 === 0){
    fizzbuzz.push('fizz');
  }
  else if(i%5 === 0){
  fizzbuzz.push('buzz');
  }

  else { fizzbuzz.push(i)
       }
}
console.log(fizzbuzz)
