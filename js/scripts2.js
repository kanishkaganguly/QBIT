var interval = setInterval(function() {
	data = "uid=" + 1;
	$.ajax({
		url: "get_score.php",
		data: data,
		dataType:"json"
	}).done(function(msg) {
		if(msg[0].curr_question == null || msg[0].curr_question < 0){
			$("#progress1").attr("style","width: 0%;");	
			$("#score1").html(0);
			$("#attempted1").html("0 Questions Attempted");
		}else{
			$("#score1").html(msg[0].score);
			$("#progress1").attr("style","width: "+ ((msg[0].curr_question/25)*100) +"%;");
			$("#attempted1").html(msg[0].curr_question + " Questions Attempted");
		}
	});

	data = "uid=" + 2;
	$.ajax({
		url: "get_score.php",
		data: data,
		dataType:"json"
	}).done(function(msg) {
		if(msg[0].curr_question == null || msg[0].curr_question < 0){
			$("#progress2").attr("style","width: 0%;");	
			$("#score2").html(0);
			$("#attempted2").html("0 Questions Attempted");
		}else{
			$("#score2").html(msg[0].score);
			$("#progress2").attr("style","width: "+ ((msg[0].curr_question/25)*100) +"%;");
			$("#attempted2").html(msg[0].curr_question + " Questions Attempted");
		}
	});
}, 1 * 1000);