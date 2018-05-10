<?php session_start()?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Main</title>
    <style media="screen">
      .All{
        margin-left: 10%;
        margin-right: 10%;
      }
      .main{
        margin-left: 25%;
      }
      .result{
        margin-bottom: 100px;
        margin-left: 30%;
      }
      #hi{
        width: 100%;
        height: 500px;
      }
      input{
      background-color: silver;
      width: 60%;
      height: 200px;
      }
    </style>
  </head>
  <body>
<div class="All">
    <div class="main">
      <input id"hey" readonly type="text" value="<?php echo "Name:".$_POST["name"] ." /". "Quote:".$_POST["quote"];?>";>
    </div>
    <hr>
    <h2>Here are the awesome quotes!</h2>

    <?php
     require_once('QuoteSocietyConnection.php');
     ?>
    <div  calss="result">
     <input id="hi" readonly type="text" value="<?php
    $query = "SELECT * FROM users";
           $result = mysqli_query($connection, $query);
           while ($row =mysqli_fetch_array($result)) {
             echo "".$row["id"].": ".$row["name"]." /".$row["quotes"];
               }
               ?>";>
    </div>
 </div>
  </body>
</html>
