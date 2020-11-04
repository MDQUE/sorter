//Lade 1 Schublade 1
var Drucker = []
//Lade 1 schublade 2
var Raspberry = []
//Lade 1 Schublade 3
var Arduino = []
//Lade 1 Schublade 4
var Joyit = []

//Lade 2 Schublade 2
var Roehren = [106976, 107212,110338, 120529, 120537, 120561, 120855, 121045, 121452, 121811, 121940]
//Lade 5 schublade 2
var LED = []
//Lade 5 Schublade 3
var Hfolie1 = []
//Lade 5 schublade 4
var Hfolie2 = []
//Lade 5 Schublade 5
var Hfolie3 = []
//Lade 5 Schublade 6
var Wiederstand1 = []
//Lade 5 Schublade 7
var Wiederstand2 = []
//Lade 5 Schublade 8
var Wiederstand3 = []
//Lade 5 Schublade 9
var Wiederstand4 = []
//Lade 5 Schublade 10
var Wiederstand5 = []
//Lade 5 Schublade 11
var Wiederstand6 = []


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
	var Roehren = [106976, 107212,110338, 120529, 120537, 120561, 120855, 121045, 121452, 121811, 121940]
	
	if (partnumber >= 106976  & partnumber <= 164844) 
		{
			//document.write("Schrank 2\n")
      highlite("l2");
			if (checkparts(Roehren, partnumber) == true) {highlite("s2");}
			else if (partnumber <= 142336 & partnumber >= 140152) {document.write("Lade 2")}
		}
	else if (partnumber <= 60) {document.write("2")}
}
