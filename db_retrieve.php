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
$qid = $_REQUEST['qid'];

//QUERY
$query = "SELECT * FROM `qbit`.`questions` WHERE qid=".$qid.";";
$json = array();
$show=mysqli_query($conn,$query) or die ("Error");
while($row=mysqli_fetch_array($show)){
	$ques = array(
		"qid"=> $row[0],
		"question"=>$row[1],
		"option1"=>$row[2],
		"option2"=>$row[3],
		"option3"=>$row[4],
		"option4"=>$row[5],
		"level"=>$row[6],
		"correct"=>$row[7]);
	array_push($json,$ques);
}
echo json_encode($json);
?>