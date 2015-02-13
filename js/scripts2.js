var interval = setInterval(function() {
	data = "uid=" + 1;
	$.ajax({
		url: "get_score.php",
		data: data,
		dataType:"json"
	}).done(function(msg) {
		$("#score1").html(msg);
	});

	data = "uid=" + 2;
	$.ajax({
		url: "get_score.php",
		data: data,
		dataType:"json"
	}).done(function(msg) {
		$("#score2").html(msg);
	});
}, 5 * 1000);