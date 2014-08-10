
var SimulationMode = {
	min: "minimal success", 
	avg: "average success", 
	max: "maximal success"
};

var ArmyFactory = {
	// config = {"B": 100}
	// army = {"B": Array(100 x UnitFactory.B()))}
	createArmy: function(config) 
	{
		console.log( "create army with ... ");
		var army = {};
		var self = this;
		$.each(config, function(key, value) {
			console.log( "... " + value + " " + key);
			var units = self.createUnits(value, key);
			army[key] = units;
		});
		return army;
	},

	createUnits: function(count, unitLetter) {
		var arr = new Array(count);
		for(var i=0; i<count; i++) {
			arr[i] = UnitFactory[unitLetter]();
		}
		return arr;
	}
};

var FightSim = {

	simulationMode: SimulationMode.avg,

	fight: function ( units1, units2 ) 
	{
		if (units1.length === 0 || units2.length === 0)
		{
			console.log("no fight");
			return;
		}
		
		console.log(units1.length + " " + units1[0].letter 
			+ " and " + units2.length + " " + units2[0].letter + " begin a fight");
		
		// TODO: iterate!
		this.attack(units1[0], units2[0]);
		this.attack(units2[0], units1[0]);
	},
	
	attack: function ( unit1, unit2 )
	{
		console.log(unit1.letter + " attacks " + unit2.letter + " with mode " + this.simulationMode);
		switch(this.simulationMode) { 
			case SimulationMode.min:
				unit2.hitPoints -= unit1.damageMin;
				break;
			case SimulationMode.max:
				unit2.hitPoints -= unit1.damageMax;
				break;
			case SimulationMode.avg:
				unit2.hitPoints -= ((unit1.damageMax * unit1.accuracy) + (unit1.damageMin * (100-unit1.accuracy))) / 100;
				break;
			default: 
				console.log("[ERROR]: unknown simulationMode: " + this.simulationMode);
		}
		
	}
}