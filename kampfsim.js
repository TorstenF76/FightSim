// http://thesettlersonline.wikia.com/wiki/Troops


var Initiative = {
	First: "first",
	Normal: "normal",
	Last: "last"
}

var UnitFactory = {
	allUnits: function() {
		return [
			u.recruit(), 
			u.militia(), 
			u.soldier(), 
			u.eliteSoldier(), 
			u.cavalry()
		];
	},
	
	unit: function(shortcut, conf) {
	
		// defaults:
		if (!conf.ini) conf.ini = Initiative.Normal;
		
		return {
			letter: shortcut,	// Buchstabe
			hitPoints: conf.hp,	// Lebenspunkte
			hitPointsAfterFight: {
				min: conf.hp, 
				avg: conf.hp, 
				max: conf.hp
			},
			damageMax: conf.max,	// Schaden max
			damageMin: conf.min,	// Schaden min
			accuracy: conf.acc, 	// Treffsicherheit
			initiative: conf.ini
		};
	},

	recruit: function() {
		return this.unit("R", { hp: 40, max: 30, min: 15, acc: 80 });
	},

	militia: function() {
		return this.unit("M", { hp: 60, max: 40, min: 20, acc: 80});
	},
	
	soldier: function() {
		return this.unit("S", { hp: 90, max: 40, min: 20, acc: 85});
	},

	eliteSoldier: function() {
		return this.unit("E", { hp: 120, max: 40, min: 20, acc: 90});
	},

	cavalry: function() {
		return this.unit("C", { hp: 5, max: 10, min: 5, acc: 80, ini: Initiative.First });
	},
}

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