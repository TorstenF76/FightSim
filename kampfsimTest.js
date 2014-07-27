QUnit.test( "create recruit", function( assert ) {
	var u = new recruit();
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
	var u = new militia();
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

QUnit.test( "fight", function( assert ) {
	var r = new recruit();
	var m = new militia();
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
	var unit = new recruit();
	var u = new units(4, unit);
	assert.ok( u, "exists" );
	assert.strictEqual( u.count, 4, "u.count" );
	assert.strictEqual( u.unit, unit, "u.unit" );
});