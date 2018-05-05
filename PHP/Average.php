<?php
function average($arr){
  $average = array_sum($arr) / count($arr);
  return $average;
}
echo average([3,2,4,3]);
 ?>
