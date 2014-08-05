
// plural
function units(count, unit) {
	this.count = count;
	this.unit = unit;
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