//Gettin a road team
var getRoadTeam = document.getElementById('roadTeam');
var roadTeam = getRoadTeam.options[getRoadTeam.selectedIndex].value;

//Getting a home team
var getHomeTeam = document.getElementById('homeTeam');
var homeTeam = getHomeTeam.options[getHomeTeam.selectedIndex].value;




function test() {

	//Getting a road team points
	var totalR = document.getElementById('totalR').value;
	var last5R = document.getElementById('last5R').value;
	var restR = document.getElementById('restR').value;
	//Getting a home team points
	var totalH = document.getElementById('totalH').value;
	var last5H= document.getElementById('last5H').value;
	var restH = document.getElementById('restH').value;


	alert(totalR + last5R + restR + totalH + last5H + restH);




}



