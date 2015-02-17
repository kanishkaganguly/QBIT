<?php
//SET ERROR REPORTING
error_reporting(E_ALL);

//SET DB VARIABLES
$db_user = "root";
$db_pass = "root";
$db_host = "localhost";
$db_name = "qbit";

//SET POST VARIABLES
$uid = 1;

//CONNECT TO DB
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name) or die("ERROR");

//POST VARIABLES
$uid = $_REQUEST['uid'];

//QUERY
$data = array();
$query = "SELECT qid, score FROM `qbit`.`results` WHERE uid=".$uid.";";
$show=mysqli_query($conn,$query) or die ("Error");
while($row=mysqli_fetch_array($show)){
	$point = array("label" => "Q".$row['qid'] , "y" => $row['score']);
	array_push($data, $point);        
}
 echo json_encode($data, JSON_NUMERIC_CHECK);
?>