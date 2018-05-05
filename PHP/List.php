<?php
$arr = [1,2,3,4,5,6,7,8,9];
echo "<ul>";
foreach($arr as $link => $value) {
  //THERE is no way $link can be ""
  echo "<li>$value</li>";
}
echo "</ul>";
 ?>
