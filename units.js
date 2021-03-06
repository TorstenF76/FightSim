// http://www.siedlertools.de/wiki/Einheiten%C3%BCbersicht


var Initiative = {
	First: "first",
	Normal: "normal",
	Last: "last"
}

var HomeIsland = {
	allUnits: function() {
		return [
			"R", "B", "M", 
			"C", "LB","S", 
			"A", "E", "K",
			"G"
		];
	}
}

var UnitFactory = {
	// Hier kommen nur die kampfrelevanten Eigenschaften hin. 
	// Alle Eigenschaften f�r die GUI (Icons, Labels) kommen in kampfsim-ui.js
	unit: function(shortcut, conf) {
		// defaults:
		if (!conf.ini) conf.ini = Initiative.Normal;
		
		return {
			letter: shortcut,	// Buchstabe
			hitPoints: conf.hp,	// Lebenspunkte
			damageMax: conf.max,	// Schaden max
			damageMin: conf.min,	// Schaden min
			accuracy: conf.acc, 	// Treffsicherheit
			initiative: conf.ini
		};
	},

	R: function() {
		return this.unit("R", { hp: 40, max: 30, min: 15, acc: 80 });
	},

	M: function() {
		return this.unit("M", { hp: 60, max: 40, min: 20, acc: 80});
	},
	
	S: function() {
		return this.unit("S", { hp: 90, max: 40, min: 20, acc: 85});
	},

	E: function() {
		return this.unit("E", { hp: 120, max: 40, min: 20, acc: 90});
	},

	C: function() {
		return this.unit("C", { hp: 5, max: 10, min: 5, acc: 80, ini: Initiative.First });
	},

	B: function() {
		return this.unit("B", { hp: 10, max: 40, min: 20, acc: 80 });
	},

	LB: function() {
		return this.unit("LB", { hp: 10, max: 60, min: 30, acc: 80 });
	},

	A: function() {
		return this.unit("A", { hp: 10, max: 90, min: 45, acc: 80 });
	},

	K: function() {
		return this.unit("K", { hp: 60, max: 120, min: 60, acc: 90, ini: Initiative.Last });
	},

	// General
	G: function() {
		return this.unit("G", { hp: 1, max: 120, min: 120, acc: 100 });
	},
}
