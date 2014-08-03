QUnit.test( "Html.tag", function(assert) {
	assert.strictEqual( Html.tag("br"), "<br/>");
	assert.strictEqual( Html.tag("img", {src: "image.png", alt: "my image"}), 
		"<img src=\"image.png\" alt=\"my image\"/>");
	assert.strictEqual( Html.tag("b", {}, "bold text"), "<b>bold text</b>");
	assert.strictEqual( Html.tag("b", {class: "bla"}, "bold text"), "<b class=\"bla\">bold text</b>");
	assert.strictEqual( Html.tag("div", {class: "bla"}, Html.tag("input", {type: "text"})), 
		"<div class=\"bla\"><input type=\"text\"/></div>");
});