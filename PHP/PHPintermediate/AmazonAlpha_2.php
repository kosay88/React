<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>AmazonAlpha_2</title>
    <style media="screen">
      body {background-color: silver;}
      .main {background-color: #a0ffe2;
        margin-left: 40%;
        margin-top: 10%;
        margin-right: 40%;
        padding: 5%;
        width: 180px;}    </style>
  </head>
  <body>
  <div class="main">
    <div class="title">
      <p>Book_Title:</p>
      <?php echo $_POST["Book_Title"]; ?>
    </div>
    <div class="Author">
      <p>Author(s):</p>
      <?php echo $_POST["Author(s)"]; ?>
    </div>
    <div class="Stock">
      <p>Stock_Available:</p>
      <?php echo $_POST["Stock_Available"]; ?>
    </div>
    <div class="Year">
      <p>year:</p>
      <?php echo $_POST["Year"]; ?>
    </div>
    <a id="back" href="http://localhost/PHPintermediate.php/AmazonAlpha.php">< Back to Homepage</a>
  </div>
  </body>
</html>
