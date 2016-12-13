var diffRoadArray = [];
var diffHomeArray = [];
var totalArray = [];
var oddArray = [];


function insert ( ) {

//Getting a betting company results
inputRoadBet = document.getElementsByClassName("inputRoadBet");
inputHomeBet = document.getElementsByClassName("inputHomeBet");




for (var i = 0; i < roadTeamArray.length; i++)
{		
	//geting road team result counted with betting company ang getting diference between
	var diffRoad =  inputRoadBet[i].value - roadTeamPointsArray[i];
	diffRoadArray.push(diffRoad);

	var diffHome =  inputHomeBet[i].value - homeTeamPointsArray[i]; 
	diffHomeArray.push(diffHome);

	
	var total =   +inputRoadBet[i].value  + +inputHomeBet[i].value - togetherPointsArray[i];
	totalArray.push(total);

	var odd =  inputRoadBet[i].value - inputHomeBet[i].value - difArray[i];
	oddArray.push(odd);

	var container = document.getElementById('getAll');
	var new_row = document.createElement('div');
	new_row.className = "final";


	new_row.innerHTML = roadTeamArray[i] + " : " + diffRoadArray[i] + " " + homeTeamArray[i] + " : " + diffHomeArray[i] + " " + " total : " + totalArray[i] + " odd " + oddArray[i] + "</br>";

	container.appendChild(new_row);

	


}

	
	



}