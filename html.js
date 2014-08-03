var Html =  {
	tag: function(name, config, text) {
		// start tag
		var html = "<";
		html += name;
		// attributes
		if (config) {
			$.each(config, function(key, value) {
				html += " " + key + "=\"" + value + "\"";
			});
		}
		// content and close tag
		if (text) {
			html += ">";
			html += text;
			html += "</" + name + ">";
		}
		else {
			html += "/>";
		}
		return html;
	}
}