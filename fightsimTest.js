QUnit.test( "Rekrut", function( assert ) {
	var u = UnitFactory.R();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 40, "HitPoints");
	assert.strictEqual(u.damageMin, 15, "damageMin");
	assert.strictEqual(u.damageMax, 30, "damageMax");
	assert.strictEqual(u.accuracy, 80, "accuracy");
	assert.strictEqual(u.initiative, "normal", "initiative");
});

QUnit.test( "Miliz", function( assert ) {
	var u = UnitFactory.M();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 60, "hitPoints");
	assert.strictEqual(u.damageMin, 20, "damageMin");
	assert.strictEqual(u.damageMax, 40, "damageMax");
	assert.strictEqual(u.accuracy, 80, "accuracy");
	assert.strictEqual(u.initiative, "normal", "initiative");
});

QUnit.test( "Soldat", function( assert ) {
	var u = UnitFactory.S();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 90, "hitPoints");
	assert.strictEqual(u.damageMin, 20, "damageMin");
	assert.strictEqual(u.damageMax, 40, "damageMax");
	assert.strictEqual(u.accuracy, 85, "accuracy");
	assert.strictEqual(u.initiative, "normal", "initiative");
});

QUnit.test( "Elitesoldat", function( assert ) {
	var u = UnitFactory.E();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 120, "hitPoints");
	assert.strictEqual(u.damageMin, 20, "damageMin");
	assert.strictEqual(u.damageMax, 40, "damageMax");
	assert.strictEqual(u.accuracy, 90, "accuracy");
	assert.strictEqual(u.initiative, "normal", "initiative");
});

QUnit.test( "Reiter", function( assert ) {
	// alternative syntax - we will need it later!
	var u = UnitFactory["C"]();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 5, "hitPoints");
	assert.strictEqual(u.damageMin, 5, "damageMin");
	assert.strictEqual(u.damageMax, 10, "damageMax");
	assert.strictEqual(u.accuracy, 80, "accuracy");
	assert.strictEqual(u.initiative, "first", "initiative");
});

QUnit.test( "fight min", function( assert ) {
	// TODO. insert SimulationMode
	var r = UnitFactory.R();
	var m = UnitFactory.M();
	assert.strictEqual(r.hitPoints, 40, "r.hitPoints");
	assert.strictEqual(m.hitPoints, 60, "m.hitPoints");
	// fight
	FightSim.simulationMode = SimulationMode.min;
	FightSim.fight(r, m, SimulationMode.min);
	// must not be changed:
	assert.strictEqual(r.hitPoints, 0, "r.hitPoints");
	assert.strictEqual(m.hitPoints, 30, "m.hitPoints");
});

QUnit.test( "fight avg", function( assert ) {
	// TODO. insert SimulationMode
	var r = UnitFactory.R();
	var m = UnitFactory.M();
	assert.strictEqual(r.hitPoints, 40, "r.hitPoints");
	assert.strictEqual(m.hitPoints, 60, "m.hitPoints");
	// var FightSim sim = new FightSim();
	FightSim.simulationMode = SimulationMode.avg;
	FightSim.fight(r, m);
	// Recruit
	assert.strictEqual(r.hitPoints, 4, "r.hitPointsAfterFight.avg");
	assert.strictEqual(m.hitPoints, 33, "r.hitPointsAfterFight.avg");
});

QUnit.test( "fight max", function( assert ) {
	// TODO. insert SimulationMode
	var r = UnitFactory.R();
	var m = UnitFactory.M();
	assert.strictEqual(r.hitPoints, 40, "r.hitPoints");
	assert.strictEqual(m.hitPoints, 60, "m.hitPoints");
	// Recruit
	FightSim.simulationMode = SimulationMode.max;
	FightSim.fight(r, m);
	// must not be changed:
	assert.strictEqual(r.hitPoints, 20, "r.hitPointsAfterFight.max");
	// Militia
	assert.strictEqual(m.hitPoints, 45, "r.hitPointsAfterFight.max");
});

QUnit.test( "create army", function( assert ) {
	var u = UnitFactory.R();
	var army = FightSim.createArmy({R: 10});
	
	assert.ok( army, "army exists" );
	assert.ok( army["R"], "Recruits exist" );
	assert.strictEqual( army["R"].count, 10, "R.count" );
	assert.deepEqual( army["R"].unit, u, "R.unit" );
});