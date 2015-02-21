 var score2;
 $(document).ready(function () {
 	var interval = setInterval(function() {
 		$.getJSON("chart_score.php?uid=2", function (result2) {
 			score2 = result2;
 		});
 		$.getJSON("chart_score.php?uid=1", function (result) {
 			var chart = new CanvasJS.Chart("chartContainer", {
 				animationEnabled: false,
 				title:{
 					text: "Performance Graph"              
 				},
 				data: [
 				{
 					lineThickness: 3,
 					type: "line",
 					name: "Team 1",
 					markerSize: 10,
 					dataPoints: result,
 					showInLegend: true
 				},
 				{	
 					lineThickness: 3,
 					type: "line",
 					name: "Team 2",
 					markerType: "triangle",
 					markerSize: 10,
 					dataPoints: score2,
 					showInLegend: true
 				}
 				],
 				axisX:{
 					labelAutoFit: true,  
 					interval: 1,
 					labelFontSize: 16,
 					labelAngle: 45,
 					intervalType:"number",
 					title:"Question"
 				},
 				axisY:{
 					title:"Points",
 					interlacedColor: "#F0F8FF" 
 				}
 			});
 			chart.render();
 		});
 	}, 1000);
 });