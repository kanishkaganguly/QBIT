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
$uid = 1;
$score = 1;
$time = 1;
$ans = 1;

//CONNECT TO DB
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name) or die("ERROR");

$qid = $_REQUEST['qid'];
$uid = $_REQUEST['uid'];
$score = $_REQUEST['score'];
$time = $_REQUEST['time'];
$ans = $_REQUEST['ans'];

$sql = "INSERT INTO results (qid, uid, score, time, ans) VALUES (".$qid.", ".$uid.", ".$score.", ".$time.", ".$ans.")";
echo $sql;
if (mysqli_query($conn, $sql)) {
	echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysql_close($conn);
?>