var Html =  {
	tag: function(name, config, text) {
		var html = "<";
		html += name;
		
		if (config) {
			$.each(config, function(key, value) {
				html += " " + key + "=\"" + value + "\"";
			});
		}
		
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