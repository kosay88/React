<?php session_start();
$_SESSION['info']=$_POST['name']; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>QuoteSociety</title>
    <style media="screen">
      body{
        margin-left: 30%;
      }
      #quote{
        width: 500px;
        height: 500px;
      }
      input{
        background-color: silver;
        margin-bottom: 30px;
      }
    </style>
  </head>
  <body>
    <?php
    if (isset($_POST['name']) == true && isset($_POST['quote']) == true && empty($_POST['name']) == false) {
      $Name = $_POST['name'];
      $Quote = $_POST['quote'];
    }
    ?>
    <h1>Welcome to QuoteSociety</h1>
    <div class="Quotes">
      <form action="QuoteSocietyMain.php" method="post">
        <h3>Your name:</h3> <input type="text" name="name"><br>
        <h3>Your quote:</h3> <input id="quote" type="text" name="quote"><br>
        <input type="submit" value="Add my quote!">
      </form>
    </div>
    <div class="skip">
      <form action="QuoteSocietyMain.php" method="post">
        <input type="submit" value="Skip to quotes!">
      </form>
    </div>
  </body>
</html>
