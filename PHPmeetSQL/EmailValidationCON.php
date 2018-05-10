<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'root');
define('DB_DATABASE', 'email');
$connection = mysqli_connect('localhost', 'root', 'root', 'email');
if(!connection){
  echo 'not conected';
}
if (!mysqli_select_db($connection,'email')){
  echo 'Datbase not selected';
}
$email = $_POST['email'];
$sql = "INSERT INTO users (emails) VALUES ('$email')";
if(!mysqli_query($connection,$sql)){
  echo "Not inserted!";
}
$query = "SELECT * FROM users";
       $result = mysqli_query($connection, $query);
       while ($row =mysqli_fetch_array($result)) {
         echo "".$row["id"]." ".$row["emails"]." ".$row["date"]." ".$row["time"]."<br>";
           }
          ?>
