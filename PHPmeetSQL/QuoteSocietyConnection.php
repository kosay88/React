<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'root');
define('DB_DATABASE', 'QuotingSociety');
$connection = mysqli_connect('localhost', 'root', 'root', 'QuotingSociety');
if(!connection){
  echo 'not conected';
}
if (!mysqli_select_db($connection,'QuotingSociety')){
  echo 'Datbase not selected';
}
$Name = $_POST['name'];
$Quote = $_POST['quote'];
$sql = "INSERT INTO users (name,quotes) VALUES ('$Name','$Quote')";
if(!mysqli_query($connection,$sql)){
  echo "Not inserted!";
}
 ?>
