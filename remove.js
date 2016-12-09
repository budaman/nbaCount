function removeParagraph() {


	//Deletes the last HEADINING

	var result = document.getElementsByClassName("result");
	for (var i =0; i < result.length-1; i++){
	};

	result = result[i];
	var parent = result.parentNode;
	parent.removeChild(result);

}

