var FightSim = {


	// config = {"B": 100}
	// army = {"B": {count: 100, unit: Unitfactory.B())}}
	createArmy: function(config) 
	{
		console.log( "create army with ... ");
		var army = {};
		$.each(config, function(key, value) {
			console.log( "... " + value + " " + key);
			var newUnit = UnitFactory[key]();
			army[key] = {
				count: value,
				unit: newUnit
			}
		});
		return army;
	},

	fight: function ( unit1, unit2 ) 
	{
		console.log(unit1.letter + " and " + unit2.letter + " begin a fight");
		this.attack(unit1, unit2);
		this.attack(unit2, unit1);
	},

	attack: function ( unit1, unit2 )
	{
		console.log(unit1.letter + " attacks " + unit2.letter);
		unit1.hitPointsAfterFight.min -= unit2.damageMax;
		unit1.hitPointsAfterFight.max -= unit2.damageMin;
		unit1.hitPointsAfterFight.avg -= ((unit2.damageMax * unit2.accuracy) + (unit2.damageMin * (100-unit2.accuracy))) / 100;
	}
}