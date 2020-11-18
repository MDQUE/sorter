/*This Code is free to use or modify. If you use it, pls give Credit :)
		Author: Dominique Martienssen
		Date: 11.2020
		@FH Technikum Wien  
*/

/* Prototype object for the listing of trays and its contents
	@ean    -> EAN number of articles (Array)
	@Inhalt -> Brief Naming of the Content (search words)(Array)
	@Fach   -> Location of the Tray (cabinet number, tray number)
*/
function Kiste (ean = [], Inhalt = ["bauteile"], Fach = [1,1]){
	this.inhalt = Inhalt;
	this.fach = Fach;
	this.EAN = ean.sort((a,b)=>a-b);
	this.smallestValue = getSmallestEan();
	this.greatestValue = getGreatestEan();
	this.EANLenght = getEanLenght;
} 

// Method Kiste::getSmallestEan
Kiste.Prototype.getSmallestEan = function(){
	if (this.EAN[0] != NULL){
		return(this.EAN[0]);
	}
	else {
		return(NULL);
	}
}

//Method Kiste::getGreatestEan
Kiste.Prototype.getGreatestEan = function(){
	if (this.EAN[1] != NULL){
		return(this.EAN[(this.EAN.length -1)])
	}
}

//Method Kiste::getEanLenght
Kiste.Prototype.getEanLenght = function(){
	if (this.smallestValue != NULL && this.greatestValue != NULL){
		var lenSmallest = this.smallestValue.toString().length;
		var lenGreatest = this.greatestValue.toString().length;
		if (lenSmallest == lenGreatest) {
			return(lenGreatest);
		}
		else{
			return(0);
		}
	}
}

// Method Kiste::addEAN
Kiste.Prototype.addEAN = function(number){
	this.EAN.push(number);
	this.EAN = this.EAN.sort((a,b)=>a-b);
	if (this.smallestValue > number){
		this.smallestValue = number;
		this.EANLenght = getEanLenght;
	}
	if (this.greatestValue < number){
		this.greatestValue = number;
		this.EANLenght = getEanLenght;
	}
}

// Method Kiste::rmEAN
Kiste.Prototype.rmEAN = function(number){
	const index = this.EAN.indexOf(number);
	if (index > -1) {
		this.EAN.splice(index, 1);
	}
}



//Lade 1 Schublade 1
var Drucker = []
//Lade 1 schublade 2
var Raspberry = []
//Lade 1 Schublade 3
var Arduino = []
//Lade 1 Schublade 4
var Joyit = []
//Lade 2 Schublade 2
var Roehren = [106976, 107212,110338, 120529, 120537, 120561, 120855, 121045, 121452, 121811, 121940];
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

