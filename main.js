//Gettin a road team
var getRoadTeam = document.getElementById('roadTeam');
var roadTeam = getRoadTeam.options[getRoadTeam.selectedIndex].value;

//Getting a home team
var getHomeTeam = document.getElementById('homeTeam');
var homeTeam = getHomeTeam.options[getHomeTeam.selectedIndex].value;




function test() {

	//Getting a road team points
	var totalRA = document.getElementById('totalRA').value;
	var totalRD = document.getElementById('totalRD').value;
	var last5RA = document.getElementById('last5RA').value;
	var last5RD = document.getElementById('last5RD').value;
	var restRA = document.getElementById('restRA').value;
	var restRD = document.getElementById('restRD').value;


	//Getting a home team points

	var totalHA = document.getElementById('totalHA').value;
	var totalHD = document.getElementById('totalHD').value;
	var last5HA = document.getElementById('last5HA').value;
	var last5HD = document.getElementById('last5HD').value;
	var restHA = document.getElementById('restHA').value;
	var restHD = document.getElementById('restHD').value;
	
	
	var totalpointsRoad = totalRA * 2 + last5RA * 5 + restRA * 3 + totalHD * 2 + last5HD * 5 + restHD * 3  ;
	var roadTeamPoints = totalpointsRoad / 20;
	roadTeamPoints = Math.round(roadTeamPoints);


	var totalpointsHome = totalRD * 2 + last5RD * 5 + restRD * 3 + totalHA * 2 + last5HA * 5 + restHA * 3  ;
	var homeTeamPoints = totalpointsHome / 20;
	homeTeamPoints = Math.round(homeTeamPoints);






	alert(roadTeam + ": " + roadTeamPoints + " " + homeTeam + ": " + homeTeamPoints);
	

}



