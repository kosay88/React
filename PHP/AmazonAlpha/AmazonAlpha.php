<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Amazon Alpha</title>
    <style media="screen">
      body {background-color: silver;}
      .books { background-color: #a0ffe2;
      margin-left: 40%;
      margin-top: 20%;
      margin-right: 40%;
      padding: 5%;
      width: 120px;}

    </style>
  </head>
  <body>
    <div class="books">
      <form action="AmazonAlpha_2.php" method="post">
        Book Title: <input type="text" name="Book Title"><br>
        Author(s): <input type="text" name="Author(s)"><br>
        Stock Available: <input type="text" name="Stock Available"><br>
        Year: <input type="date" name="Year" value="" placeholder="mm/dd/yyyy"><br>
        <input type="submit" value="submit"><br>
      </form>
    </div>
  </body>
</html>
