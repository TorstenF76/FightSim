var KampfsimUi = {
	// http://www.siedlertools.de/wiki/Einheiten%C3%BCbersicht
	icons: {
		R: "http://www.siedlertools.de/w/images/e/eb/Icon_recruit.png",
		M: "http://www.siedlertools.de/w/images/9/98/Icon_militia.png",
		S: "http://www.siedlertools.de/w/images/c/c3/Icon_soldier.png",
		E: "http://www.siedlertools.de/w/images/2/28/Icon_elite_soldier.png",
		C: "http://www.siedlertools.de/w/images/1/15/Cavalry.png",
		B: "http://www.siedlertools.de/w/images/5/5b/Icon_bowman.png",
		LB: "http://www.siedlertools.de/w/images/2/2f/Icon_longbowman.png",
		A: "http://www.siedlertools.de/w/images/6/6e/Icon_crossbowman.png",
		K: "http://www.siedlertools.de/w/images/4/49/Icon_cannonier.png",
		G: "http://www.siedlertools.de/w/images/b/b8/Icon_general2.png"
	},
	
	labels: {
		R: "Rekrut",
		M: "Miliz", 
		S: "Soldat", 
		E: "Elitesoldat", 
		C: "Reiter", 
		B: "Bogenschütze", 
		LB: "Langbogenschütze", 
		A: "Armbrustschütze", 
		K: "Kanonier",
		G: "General"
	},
	
	printUnit: function(unit) {
		var icon = this.icons[unit.letter];
		var text = this.labels[unit.letter];
		var html = "<span class='unit'>";
		html += Html.tag("input", { class: "spinner", name: unit.letter, size: 3, value: 0 } );
		html += Html.tag("img", { src: icon, alt: unit.letter });
		html += "&nbsp;" + text;
		html += "</span>";
		return html;
	},
	
	printUnits: function(units) {
		var html = "";
		var _this = this;
		$.each(units, function(key, value) {
			html += _this.printUnit(value);
			html += Html.tag("br");
		});
		return html;
	},
	
	parseUnits: function(selector) {
		var units = {};
		// body > table > tbody > tr:nth-child(2) > td.left > span:nth-child(20) > span > input
		$(selector + " .unit input").each(function(i, e) {
			var n = e.name;
			var c = e.value;
			units[n] = c;
		});
		
		return units;
	},
	
	init: function() {
		$( ".unit .spinner" ).spinner({min: 0, max: 250});
	}
}