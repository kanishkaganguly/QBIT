<?php
//SET ERROR REPORTING
error_reporting(E_ALL);

//SET DB VARIABLES
$db_user = "root";
$db_pass = "root";
$db_host = "localhost";
$db_name = "qbit";

//CONNECT TO DB
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name) or die("ERROR");

//QUERY
$query = "DELETE FROM `qbit`.`results`;";
$show=mysqli_query($conn,$query) or die ("Error");
?>