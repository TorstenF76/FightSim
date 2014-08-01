var KampfsimUi = {
	// http://www.siedlertools.de/wiki/Einheiten%C3%BCbersicht
	icons: {
		R: "http://www.siedlertools.de/w/images/e/eb/Icon_recruit.png",
		M: "http://www.siedlertools.de/w/images/9/98/Icon_militia.png",
		S: "http://www.siedlertools.de/w/images/c/c3/Icon_soldier.png",
		E: "http://www.siedlertools.de/w/images/2/28/Icon_elite_soldier.png",
		C: "http://www.siedlertools.de/w/images/1/15/Cavalry.png",
		B: "http://www.siedlertools.de/wiki/Bogensch%C3%BCtze",
		LB: "http://www.siedlertools.de/w/images/2/2f/Icon_longbowman.png",
		A: "http://www.siedlertools.de/w/images/6/6e/Icon_crossbowman.png",
		K: "http://www.siedlertools.de/w/images/4/49/Icon_cannonier.png"
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
		K: "Kanonier"
	},
	
	render: function(unit) {
		var icon = this.icons[unit.letter];
		var text = this.labels[unit.letter];
		return "<img src='" + icon + "' alt='" + unit.letter + "'/>&nbsp;" + text;
	}
}