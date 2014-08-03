QUnit.test( "Html.tag", function(assert) {
	assert.strictEqual( Html.tag("br"), "<br/>");
	assert.strictEqual( Html.tag("img", {src: "image.png", alt: "my image"}), 
		"<img src=\"image.png\" alt=\"my image\"/>");
	assert.strictEqual( Html.tag("b", {}, "bold text"), "<b>bold text</b>");
});