
var roadTeamArray = [];
var homeTeamArray = [];


var roadTeamPointsArray = [];
var homeTeamPointsArray = [];
var togetherPointsArray = [];
var difArray = [];


function countResults() {


	var getRoadTeam = document.getElementById('roadTeam');
    roadTeam = getRoadTeam.options[getRoadTeam.selectedIndex].value;
    roadTeamArray.push(roadTeam);

    var getHomeTeam = document.getElementById('homeTeam');
var homeTeam = getHomeTeam.options[getHomeTeam.selectedIndex].value;
	homeTeamArray.push(homeTeam);



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

	//=====================COUNTING DEFF POINTS===============================

	totalRD = totalRA - totalRD;
	last5RD = last5RA - last5RD;
	restRD = restRA - restRD;

	totalHD = totalHA - totalHD;
	last5HD = last5HA - last5HD;
	restHD = restHA - restHD;


	
	
	//Counting formula

	//==========ROAD TEAM =====================
	var totalpointsRoad = totalRA * 2 + last5RA * 5 + restRA * 3 + totalHD * 2 + last5HD * 5 + restHD * 3  ;
	var roadTeamPoints = totalpointsRoad / 20;
	var roadTeamPoints = Math.round(roadTeamPoints);
	roadTeamPointsArray.push(roadTeamPoints);


	//=========HOME TEAM =======================
	var totalpointsHome = totalRD * 2 + last5RD * 5 + restRD * 3 + totalHA * 2 + last5HA * 5 + restHA * 3  ;
	var homeTeamPoints = totalpointsHome / 20;
	var homeTeamPoints = Math.round(homeTeamPoints);
	homeTeamPointsArray.push(homeTeamPoints);



	//=========TOGETHER POINTS ===============
	var togetherPoints = roadTeamPoints + homeTeamPoints;
	togetherPointsArray.push(togetherPoints);



	//==========DIFERENCE BETWEEN TEANS=========
	var dif = roadTeamPoints - homeTeamPoints;
	difArray.push(dif);




	//HTML ELEMENTS APPEARING -----------------------
	var container = document.getElementById('main');
	var new_row = document.createElement('div');
	new_row.className = "result";

	var input = document.createElement("input");
	input.type = "text";
	input.size = 1;
	input.id ="TeamRoadOdd"
	input.className = "inputRoadBet";

	var input1 = document.createElement("input");
	input1.type = "text";
	input1.size = 1;
	input1.id ="TeamHomeOdd"
	input1.className = "inputHomeBet";

	 // put it into the DOM

    new_row.innerHTML = 	roadTeam + ": " + roadTeamPoints + " " + homeTeam + ": " + homeTeamPoints + " total: " + togetherPoints + " odd: " + dif + "</br> "
    						+ "Bet company result: ";
      container.appendChild(new_row);   
      new_row.appendChild(input);     
      new_row.appendChild(input1);   

    makeNull();

    
}

function makeNull() {

	document.getElementById('totalRA').value = null;
	document.getElementById('totalRD').value = null;
	document.getElementById('last5RA').value = null;
	document.getElementById('last5RD').value = null;
	document.getElementById('restRA').value = null;
	document.getElementById('restRD').value = null;
	document.getElementById('totalHA').value = null;
	document.getElementById('totalHD').value = null;
	document.getElementById('last5HA').value = null;
	document.getElementById('last5HD').value = null;
	document.getElementById('restHA').value = null;
	document.getElementById('restHD').value = null;

	document.getElementById('roadTeam').selectedIndex = 0;
	document.getElementById('homeTeam').selectedIndex = 0;
    
	
    
}


