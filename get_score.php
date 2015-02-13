<?php
//SET ERROR REPORTING
error_reporting(E_ALL);

//SET DB VARIABLES
$db_user = "root";
$db_pass = "root";
$db_host = "localhost";
$db_name = "qbit";

//SET POST VARIABLES
$qid = 1;

//CONNECT TO DB
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name) or die("ERROR");

//POST VARIABLES
$uid = $_REQUEST['uid'];

//QUERY
$query = "SELECT MAX(score), MAX(qid) FROM `qbit`.`results` WHERE uid=".$uid.";";
$json = array();
$show=mysqli_query($conn,$query) or die ("Error");
while($row=mysqli_fetch_array($show)){
	$ques = array(
		"score"=>$row[0],
		"curr_question"=>$row[1]);
	array_push($json,$ques);
}
echo json_encode($json);
?>