// http://thesettlersonline.wikia.com/wiki/Troops

// plural
function units(count, unit) {
	this.count = count;
	this.unit = unit;
}

function unit(hitPoints, damageMin, damageMax, accuracy) {
	this.hitPoints = hitPoints;	// Lebenspunkte
	this.hitPointsAfterFight = {
		min: hitPoints, avg: hitPoints, max: hitPoints
	}
	this.damageMin = damageMin;	// Schaden min
	this.damageMax = damageMax;	// Schaden max
	this.accuracy = accuracy; 	// Treffsicherheit
	this.initiative = "normal";
}

function recruit() {
	var r = new unit(40, 15, 30, 80);
	return r;
}

function militia() {
	var m = new unit(60, 20, 40, 80);
	return m;
}

function garrison(unitsArray) {
	this.units = unitsArray;
}

function fight(unit1, unit2) {
	calcFight(unit1, unit2);
	calcFight(unit2, unit1);
}

function calcFight(unit1, unit2)
{
	unit1.hitPointsAfterFight.min -= unit2.damageMax;
	unit1.hitPointsAfterFight.max -= unit2.damageMin;
	unit1.hitPointsAfterFight.avg -= ((unit2.damageMax * unit2.accuracy) + (unit2.damageMin * (100-unit2.accuracy))) / 100;
}