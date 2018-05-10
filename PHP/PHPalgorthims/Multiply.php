<?php
function Multiply ($arr){
  foreach ($arr as $key => $value) {
  $new_arr[$key] = $value * 5;
}
return $new_arr;
}
var_dump(Multiply([1,2,3,4]));
 ?>
