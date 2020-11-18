/*This Code is free to use or modify. If you use it, pls give Credit :)
		Author: Dominique Martienssen
		Date: 11.2020
		@FH Technikum Wien  
*/


/* 
	Respond to press of "Enter" in search field
*/
function eventhandler(event){
	if(event.keyCode === 13)
	{
		event.preventDefault;
		document.getElementById("searchbutton").click()
	}
}

/*
	Get Text in search input Field
*/
function checktype(){
  var searchtext = document.getElementById("parg").value;
  removeHighlite();
  evaluate(searchtext);
}

function checkparts(arrayname, partnumber) {
	for (i = 0 ; i <= arrayname.length -1; i++)
	{
		if (arrayname[i] == partnumber) {return true}
		//document.write(arrayname[i])
	}
}

function highlite(elementid){
	element = document.getElementById(elementid)
	element.className += " highlited";
}

function removeHighlite(){
	let highlited = document.getElementsByClassName("highlited");
	if (highlited.length >= 2){
		let len = highlited.length -1;
		for (i=0 ;i <= len; i++ )
		{
			remover(highlited[0]);
		}
	}
	else if (highlited.length == 1){
		remover(highlited[0]);
	}
}

function remover(element, index = 1){
	console.log(typeof(element));
	element.className = element.className.replace(" highlited", "");
}

function evaluate(partnumber) {
	
	if (partnumber >= 106976  & partnumber <= 164844) 
		{
			//document.write("Schrank 2\n")
      highlite("l2");
			if (checkparts(Roehren, partnumber) == true) {highlite("s2");}
			else if (partnumber <= 142336 & partnumber >= 140152) {document.write("Lade 2")}
		}
	else if (partnumber <= 60) {highlite("l1")}
}

function dataHandler(){
	ladenArray = []
}

/*Method dataHandler::saveObjects
		Saves the contents of "Kiste" Objects to a local DB
		Function not currently realized
*/
dataHandler.Prototype.saveObjects = function(){
	return;
}










