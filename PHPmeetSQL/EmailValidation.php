<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Email Validation</title>
  </head>
  <body>
    <?php
    if (isset($_POST['email']) == true && empty($_POST['email']) == false) {
      $email = $_POST['email'];
      if (filter_var($email, FILTER_VALIDATE_EMAIL) == true) {
        echo "<h3 style='color:green'>This email is valid!</h3>";
      } else {
        echo "<h3 style='color:orange'>This email is not valid!</h3>";
        $_SESSION['email'] = $_POST['email'];
        session_destroy();
        // header('Location:EmailValidation.php');
      }
    }
     // include("EmailValidationprcess.php")
      ?>
    <div class="emailbox">
      <form action="EmailValidation.php" method="post">
        <h3>Email:</h3> <input type="text" name="email">
        <input type="submit" value="submit">
      </form>
    </div>
    <div class="info">
      <?php require_once('EmailValidationCON.php') ?>
    </div>
  </body>
</html>
