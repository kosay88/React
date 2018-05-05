<?php
 $grade = rand(40,100);
  if($grade < 65){
  echo "<h2 style= 'color:red'> Your score: $grade/100 </h2> <br> <h3 style= 'color:red'>Your grade is D. </h3>";
 }
 elseif($grade < 85 and $grade >= 65) {
  echo "<h2 style= 'color:yellow'>Your score: $grade/100 </h2> <br> <h3 style= 'color:yellow'>Your grade is C. </h3>";
 }
 elseif($grade < 95 and $grade >=85){
  echo "<h2 style= 'color:green'>Your score: $grade/100 </h2> <br> <h3 style= 'color:green'>Your grade is B. </h3>";
 }
 else{
  echo "<h2 style= 'color:blue'>Your score: $grade/100 </h2> <br> <h3 style= 'color:blue'>Your grade is A. </h3>";
 }
?>
