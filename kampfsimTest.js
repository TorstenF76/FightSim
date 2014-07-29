QUnit.test( "create recruit", function( assert ) {
	var u = UnitFactory.recruit();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 40, "HitPoints");
	assert.strictEqual(u.hitPointsAfterFight.min, 40, "hitPointsAfterFight.min");
	assert.strictEqual(u.hitPointsAfterFight.avg, 40, "hitPointsAfterFight.avg");
	assert.strictEqual(u.hitPointsAfterFight.max, 40, "hitPointsAfterFight.max");
	assert.strictEqual(u.damageMin, 15, "damageMin");
	assert.strictEqual(u.damageMax, 30, "damageMax");
	assert.strictEqual(u.accuracy, 80, "accuracy");
	assert.strictEqual(u.initiative, "normal", "initiative");
});

QUnit.test( "create militia", function( assert ) {
	var u = UnitFactory.militia();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 60, "hitPoints");
	assert.strictEqual(u.hitPointsAfterFight.min, 60, "hitPointsAfterFight.min");
	assert.strictEqual(u.hitPointsAfterFight.avg, 60, "hitPointsAfterFight.avg");
	assert.strictEqual(u.hitPointsAfterFight.max, 60, "hitPointsAfterFight.max");
	assert.strictEqual(u.damageMin, 20, "damageMin");
	assert.strictEqual(u.damageMax, 40, "damageMax");
	assert.strictEqual(u.accuracy, 80, "accuracy");
	assert.strictEqual(u.initiative, "normal", "initiative");
});

QUnit.test( "create soldier", function( assert ) {
	var u = UnitFactory.soldier();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 90, "hitPoints");
	assert.strictEqual(u.hitPointsAfterFight.min, 90, "hitPointsAfterFight.min");
	assert.strictEqual(u.hitPointsAfterFight.avg, 90, "hitPointsAfterFight.avg");
	assert.strictEqual(u.hitPointsAfterFight.max, 90, "hitPointsAfterFight.max");
	assert.strictEqual(u.damageMin, 20, "damageMin");
	assert.strictEqual(u.damageMax, 40, "damageMax");
	assert.strictEqual(u.accuracy, 85, "accuracy");
	assert.strictEqual(u.initiative, "normal", "initiative");
});

QUnit.test( "create elite soldier", function( assert ) {
	var u = UnitFactory.eliteSoldier();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 120, "hitPoints");
	assert.strictEqual(u.hitPointsAfterFight.min, 120, "hitPointsAfterFight.min");
	assert.strictEqual(u.hitPointsAfterFight.avg, 120, "hitPointsAfterFight.avg");
	assert.strictEqual(u.hitPointsAfterFight.max, 120, "hitPointsAfterFight.max");
	assert.strictEqual(u.damageMin, 20, "damageMin");
	assert.strictEqual(u.damageMax, 40, "damageMax");
	assert.strictEqual(u.accuracy, 90, "accuracy");
	assert.strictEqual(u.initiative, "normal", "initiative");
});

QUnit.test( "create cavalry", function( assert ) {
	var u = UnitFactory.cavalry();
	assert.ok(u, "exists");
	assert.strictEqual(u.hitPoints, 5, "hitPoints");
	assert.strictEqual(u.hitPointsAfterFight.min, 5, "hitPointsAfterFight.min");
	assert.strictEqual(u.hitPointsAfterFight.avg, 5, "hitPointsAfterFight.avg");
	assert.strictEqual(u.hitPointsAfterFight.max, 5, "hitPointsAfterFight.max");
	assert.strictEqual(u.damageMin, 5, "damageMin");
	assert.strictEqual(u.damageMax, 10, "damageMax");
	assert.strictEqual(u.accuracy, 80, "accuracy");
	assert.strictEqual(u.initiative, "first", "initiative");
});

QUnit.test( "fight", function( assert ) {
	var r = UnitFactory.recruit();
	var m = UnitFactory.militia();
	fight(r, m);
	// must not be changed:
	assert.strictEqual(r.hitPoints, 40, "r.hitPoints");
	assert.strictEqual(m.hitPoints, 60, "m.hitPoints");
	// Recruit
	assert.strictEqual(r.hitPointsAfterFight.min, 0, "r.hitPointsAfterFight.min");
	assert.strictEqual(r.hitPointsAfterFight.max, 20, "r.hitPointsAfterFight.max");
	assert.strictEqual(r.hitPointsAfterFight.avg, 4, "r.hitPointsAfterFight.avg");
	// Militia
	assert.strictEqual(m.hitPointsAfterFight.min, 30, "r.hitPointsAfterFight.min");
	assert.strictEqual(m.hitPointsAfterFight.max, 45, "r.hitPointsAfterFight.max");
	assert.strictEqual(m.hitPointsAfterFight.avg, 33, "r.hitPointsAfterFight.avg");
});

QUnit.test( "create units", function( assert ) {
	var unit = UnitFactory.recruit();
	var u = new units(4, unit);
	assert.ok( u, "exists" );
	assert.strictEqual( u.count, 4, "u.count" );
	assert.strictEqual( u.unit, unit, "u.unit" );
});