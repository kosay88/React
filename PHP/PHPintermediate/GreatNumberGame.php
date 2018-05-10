<?php
 session_start();
if(!isset($_SESSION["number"])) {
$_SESSION["number"] = rand(1,100);
}
$mynumber = $_SESSION["number"];
 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>GreatNumberGame</title>
    <style media="screen">
      body {
        background-color: silver;
        margin-top: 10%;
        margin-left: 40%;
      }
      #red {
        background-color: red;
        width: 200px;
        height: 100px;
        padding: 5%;
      }
      #green {
        background-color: green;
        width: 200px;
        height: 100px;
        padding: 5%;
      }
      .numberGame {
        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <div class="intro">
      <h1>Welcome to the Great Number Game!</h1><br>
      <h3>I am thinking of a number between 1 and 100 take a guess!</h3><br>
    </div>

  <?php
      if($_POST['number'] > $mynumber ){
       echo '<div><h2 id=red>Too high!</h2></div>';}
    elseif($_POST['number'] < $mynumber) {
       echo '<div><h2 id=red>Too low!</h2></div>';}
    elseif($_POST['number'] == $mynumber) {
       echo '<div><h2 id=green>Yes it was the right number!</h2></div>';}
  ?>

    <div class="numberGame">
      <form action="GreatNumberGame.php" method="post">
        <input type="text" name="number"><br>
        <input type="submit" value="submit"><br>
      </form>
   </div>
  </body>
</html>
<?php if($_POST['number'] == $mynumber) {
  unset($_SESSION['number']);
} ?>
