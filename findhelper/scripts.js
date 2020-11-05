/*This Code is free to use or modify. If you use it, pls give Credit :)
		Author: Dominique Martienssen
		Date: 11.2020
		@FH Technikum Wien  
*/

function checktype(){
  var searchtext = document.getElementById("parg").value;
  evaluate(searchtext)
}

function checkparts(arrayname, partnumber) {
	for (i = 0 ; i <= arrayname.length -1; i++)
	{
		if (arrayname[i] == partnumber) {return true}
		//document.write(arrayname[i])
	}
}

function highlite(elementid){
document.getElementById(elementid).style.backgroundColor = "Red";
}


function evaluate(partnumber) {
	
	if (partnumber >= 106976  & partnumber <= 164844) 
		{
			//document.write("Schrank 2\n")
      highlite("l2");
			if (checkparts(Roehren, partnumber) == true) {highlite("s2");}
			else if (partnumber <= 142336 & partnumber >= 140152) {document.write("Lade 2")}
		}
	else if (partnumber <= 60) {document.write("2")}
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










