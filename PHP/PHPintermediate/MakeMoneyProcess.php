<?php session_start();
    $money=$_SESSION['cash'];
?>

<?php
    $d=date('d-m-y');
    $t=date('H:i:s');
if(($_POST['action']) && $_POST['action']=='farm') {
    $farm_money=rand(10,20);
    $_SESSION['cash']+=$farm_money;
    $_SESSION['status']="<p style='color:green'>You entered farm and earnd $farm_money golds. $d $t</p>";
    header('location:http://localhost/PHPintermediate/MakeMoney.php ');
}
if(($_POST['action']) && $_POST['action']=='cave') {
    $cave_money=rand(5,10);
    $_SESSION['cash']+=$cave_money;
    $_SESSION['status']="<p style='color:green'>You entered farm and earnd $cave_money golds. $d $t</p>";
    header('location:http://localhost/PHPintermediate/MakeMoney.php ');
}
if(($_POST['action']) && $_POST['action']=='house') {
    $house_money=rand(2,5);
    $_SESSION['cash']+=$house_money;
    $_SESSION['status']="<p style='color:green'>You entered farm and earnd $house_money golds. $d $t</p>";
    header('location:http://localhost/PHPintermediate/MakeMoney.php ');
}
if(($_POST['action']) && $_POST['action']=='casino') {
    $casino_money=rand(0,50);
    $chance=rand(0,3);
        if($chance==0){
            $_SESSION['cash']+=$casino_money;
            $_SESSION['status']="<p style='color:green'>You entered farm and earnd $casino_money golds. $d $t</p>";
        }
        if($chance>=1){
            $_SESSION['cash']-=$casino_money;
            $_SESSION['status']="<p style='color:green'>You entered farm and earnd $casino_money golds. $d $t</p>";
        }
    header('location:http://localhost/PHPintermediate/MakeMoney.php ');
    }

if(isset($_POST['action']) && $_POST['action']=='try-again') {
  session_destroy();
    header('location:http://localhost/PHPintermediate/MakeMoney.php ');
}

?>
