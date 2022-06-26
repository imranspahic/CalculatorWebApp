<?php

 include_once 'connect.php';

 $name = $_POST['name'];
 $email = $_POST['email'];
 $aboutbug = $_POST['aboutbug'];
 $solution = $_POST['solution'];

$sql = "INSERT INTO bugreport (name,email,aboutbug,solution) VALUES ('$name',' $email',' $aboutbug','$solution');";



mysqli_query($conn,$sql);

header("Location: index.html");
