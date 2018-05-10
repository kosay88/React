<?php session_start(); ?>
<?php if(!isset($_SESSION['cash'])){
    $_SESSION['cash']=0;
    $_SESSION['status']="";
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
   <style media="screen">
      body {
        background-color: #f2e3e3;
        margin-left: 40%;
      }
      #buttons {
        width: 500px;
        background-color: gold;
        padding: 20px;
        margin-top: 40px;
        margin-left: -17%;
      }
      #farm {
        display: inline-block;
      }
      #cave {
        display: inline-block;
      }
      #house {
        display: inline-block;
      }
      #casino {
        display: inline-block;
      }
      #farm-submit {
        margin-top: 20px;
        display: block;
      }
      #cave-submit {
        margin-top: 20px;
        display: block;
      }
      #house-submit {
        margin-top: 20px;
        display: block;
      }
      #casino-submit {
        margin-top: 20px;
        display: block;
      }
      #activities {
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 35%;
      }
      #fieldbox {
        margin-top: 50px;
        margin-left: -65%;
      }
   </style>
</head>
<body>
    <div >
            <h2>Your Gold</h2>
            <input readonly type="number" value="<?php echo $_SESSION['cash'] ?>";>
    </div>
    <div id="buttons">
        <div id="farm">
            <form action="MakeMoneyProcess.php" method="POST">
                <label for="farm-submit">Farm <br> (earn 10-20 golds)</label>
                <input id="farm-submit" type="submit">
                <input type="hidden" name="action" value="farm">
            </form>
        </div>
        <div id="cave">
            <form action="MakeMoneyProcess.php" method="POST">
                <label for="cave-submit">Cave <br> (earn 5-10 golds)</label>
                <input id="cave-submit" type="submit">
                <input type="hidden" name="action" value="cave">
            </form>
        </div>
        <div id="house">
            <form action="MakeMoneyProcess.php" method="POST">
                <label for="house-submit">House <br> (earn 2-5 golds)</label>
                <input id="house-submit" type="submit">
                <input type="hidden" name="action" value="house">
            </form>
            </div>
            <div id="casino">
            <form action="MakeMoneyProcess.php" method="POST">
                <label for="casino-submit">Casino <br> (earn /takes 0-50 golds)</label>
                <input id="casino-submit" type="submit">
                <input type="hidden" name="action" value="casino">
            </form>
        </div>
    </div>
    <footer>
        <h2>Activities</h2>
  <fieldset id="fieldbox">
      <div id="activities">
    <?php
    $_SESSION['arr']=[];
    array_push($_SESSION['arr'], $_SESSION['status']);
    foreach($_SESSION['arr'] as $i){
        print $i;
    }
    ?>
     </div>
  </fieldset>
    <div>
        <?php
        if($money=$_SESSION['cash']<0){
            echo "<form method='POST' action='MakeMoneyProcess.php'>
            <h1 style='color:orange'>Game Over!</h1>
            <input type='hidden' name='action' value='try-again'>
            <input value='Try Again' type='submit'>
            </form>";
        }
        ?>
    </div>
    </footer>
</body>
</html>
