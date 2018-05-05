<?php
$head = 0 ;
$tail = 0 ;
for ($i = 1 ; $i <= 1000 ; $i++){
$coin = rand(0,1);
if($coin == 0 ){
  $head = $head +1;
  echo "Attempt $i: Coin is in the air... It's a tail!... So far  $head heads and $tail tails"."<br>";
}
else{
  $tail =$tail +1;
  echo "Attempt $i: Coin is in the air... It's a head!... So far  $head heads and $tail tails"."<br>";
}
}

 ?>
