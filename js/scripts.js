//Variables Init
score = 0;
question_counter = 1;
counter = 25;
ans = 0;
uid = 0;
correct=0;

/* BEGIN GLOBAL FUNCTIONS DECLARATION */

//Update Database
function updateDB(qid, uid, score, time, ans){
	var data = "qid=" + qid + "&uid=" + uid + "&score=" + score + "&time=" + (25-time) + "&ans=" + ans;
	$.ajax({
		url: "db_enter.php",
		data: data
	}).done(function() {
		$("#alert").width("10%");
		$("#alert").html("QUESTION " + qid + " ANSWERED.");
		$("#alert").removeAttr("hidden");
	});
}

//Get Question
function retrieveDB(qcount){
	var data = "qid="+qcount;
	$.ajax({
		url: "db_retrieve.php",
		data: data,
		dataType:"json"
	}).done(function(msg) {
		qid = msg[0].qid;
		question = msg[0].question;
		opt1 = msg[0].option1;
		opt2 = msg[0].option2;
		opt3 = msg[0].option3;
		opt4 = msg[0].option4;
		level = msg[0].level;
		correct = msg[0].correct;
	});
}

//Set UI for new question
function setUI(qcount){
	setTimeout(function(){
		$(".btn").attr("class", "btn btn-default");
		$(".btn").attr("class", "btn btn-default");
		var data = "qid="+qcount;
		$.ajax({
			url: "db_retrieve.php",
			data: data,
			dataType:"json"
		}).done(function(msg) {
			$("#q_header").html("Question " + msg[0].qid);
			$("#q_body").html(msg[0].question);
			$("#1").html("<em class=\"glyphicon glyphicon-ok\"></em>" + msg[0].option1);
			$("#2").html("<em class=\"glyphicon glyphicon-ok\"></em>" + msg[0].option2);
			$("#3").html("<em class=\"glyphicon glyphicon-ok\"></em>" + msg[0].option3);
			$("#4").html("<em class=\"glyphicon glyphicon-ok\"></em>" + msg[0].option4);
			$("#level").html("Level " + msg[0].level);
			correct = msg[0].correct;
		});
	},500);
}

/* END FUNCTION DECLARATIONS */


$(document).ready(function(){
		//User ID input
		$('#login').modal("show");
		//Prepare First Question
		//retrieveDB(question_counter);
		//Get user ID
		$("#login").on('shown.bs.modal', function(){
			$("#save_uid").click(function(){
				uid = $("#unum").val();
				$('#login').modal("hide");
			});
		});

		$("#login").on('hidden.bs.modal', function(){
			setUI(question_counter);

			var interval = setInterval(function() {
				counter--;
				$("#timer").attr("style","width: "+ ((counter/25)*100) +"%;");
				$("#timeleft").html("TIME LEFT &nbsp; <b>" + counter + "s</b>");
				if(counter > 20){
					$("#timer").attr("class","progress-bar progress-bar-success");
				}else if(counter < 20 && counter > 15){
					$("#timer").attr("class","progress-bar progress-bar-success");
				}else if(counter < 15 && counter > 6){
					$("#timer").attr("class","progress-bar progress-bar-warning");
				}else if(counter < 6){
					$("#timer").attr("class","progress-bar progress-bar-danger");
					beep();
				}
				if (counter == 0) {
					ans = 0;
					score = score + 0;
					updateDB(question_counter, uid, score, counter, ans);
					question_counter=question_counter+1;
					if(question_counter<26){
						setUI(question_counter);
						counter = 25;
					}
					else{
						clearInterval(interval);
						$('#finish').modal("show");
					}
				}
			}, 1000);

			$(".btn").click(function(event){
				$(".btn").prop("disabled", true);
				ans = this.id;
				if(ans == correct){
					$("#" + ans).attr("class", "btn btn-success");
					//$("#ans_alert").html("CORRECT ANSWER.");
					score = score + counter;
				}else{
					$("#" + ans).attr("class", "btn btn-danger");
					//$("#ans_alert").html("WRONG ANSWER.");
					score = score + 0;
				}
				updateDB(question_counter, uid, score, counter, ans);
				$("#scoreshow").html("CURRENT SCORE &nbsp;<b>" + score + "</b>")
				question_counter=question_counter+1;
				//retrieveDB(question_counter);
				$(".btn").prop("disabled", false);
				if(question_counter<26){
					setUI(question_counter);
					counter = 25;
				}else{
					clearInterval(interval);
					$('#finish').modal("show");
					$('#finscore').html(score);
				}
			});

			function beep() {
				var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
				snd.play();
			}		
		});
});